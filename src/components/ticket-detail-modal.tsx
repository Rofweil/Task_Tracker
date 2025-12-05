import { useState, useEffect, useRef } from 'react';
import { X, Send, FileText, Download, Clock, User, Mail, Phone, MapPin, Paperclip, Upload } from 'lucide-react';
import { ref, update, onValue } from 'firebase/database';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { database, storage } from '../lib/firebase';
import { sendEmail } from '../lib/emailService';

interface TicketDetailModalProps {
  ticket: any;
  itStaffInfo: any;
  onClose: () => void;
  onUpdate: () => void;
}

export function TicketDetailModal({ ticket, itStaffInfo, onClose, onUpdate }: TicketDetailModalProps) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploadingFile, setUploadingFile] = useState(false);
  const [status, setStatus] = useState(ticket.status);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isOwner = ticket.claimedBy?.uid === itStaffInfo.uid;

  useEffect(() => {
    // Listen for messages
    const messagesRef = ref(database, `tickets/${ticket.ticketId}/messages`);
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      if (snapshot.exists()) {
        const messagesData = snapshot.val();
        const messagesList = Object.entries(messagesData).map(([key, value]: [string, any]) => ({
          id: key,
          ...value,
        }));
        messagesList.sort((a, b) => new Date(a.sentAt).getTime() - new Date(b.sentAt).getTime());
        setMessages(messagesList);
      }
    });

    return () => unsubscribe();
  }, [ticket.ticketId]);

  const handleSendMessage = async () => {
    if (!message.trim() || !isOwner) return;

    setLoading(true);
    try {
      const now = new Date().toISOString();
      const messageData = {
        text: message,
        sentBy: {
          uid: itStaffInfo.uid,
          displayName: itStaffInfo.displayName,
          email: itStaffInfo.email,
          role: 'IT Staff'
        },
        sentAt: now,
        emailSent: true
      };

      // Add message
      const messageRef = ref(database, `tickets/${ticket.ticketId}/messages`);
      await update(messageRef, {
        [Date.now()]: messageData
      });

      // Update ticket's last message
      await update(ref(database, `tickets/${ticket.ticketId}`), {
        lastMessage: messageData,
        updatedAt: now,
      });

      // Send email to the user
      await sendEmail({
        to_email: ticket.createdBy.email,
        to_name: ticket.createdBy.name,
        from_name: itStaffInfo.displayName,
        from_email: itStaffInfo.email,
        subject: `Re: Ticket #${ticket.ticketId} - ${ticket.title}`,
        message: message,
        ticket_id: ticket.ticketId,
        ticket_title: ticket.title,
      });

      setMessage('');
      onUpdate();
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (newStatus: string) => {
    if (!isOwner) return;

    try {
      await update(ref(database, `tickets/${ticket.ticketId}`), {
        status: newStatus,
        updatedAt: new Date().toISOString(),
      });
      setStatus(newStatus);
      onUpdate();
    } catch (error) {
      console.error('Error updating ticket status:', error);
      alert('Failed to update ticket status. Please try again.');
    }
  };

  const handleTransferTicket = async () => {
    if (!isOwner) return;

    const confirmed = confirm('Are you sure you want to release this ticket? It will become available for other IT staff to claim.');
    if (!confirmed) return;

    try {
      await update(ref(database, `tickets/${ticket.ticketId}`), {
        status: 'open',
        claimedBy: null,
        claimedAt: null,
        updatedAt: new Date().toISOString(),
      });

      onUpdate();
      onClose();
    } catch (error) {
      console.error('Error transferring ticket:', error);
      alert('Failed to transfer ticket. Please try again.');
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'in_progress': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'closed': return 'bg-gray-100 text-gray-700 border-gray-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !isOwner) return;

    setUploadingFile(true);
    try {
      // Upload file to Firebase Storage
      const fileRef = storageRef(storage, `tickets/${ticket.ticketId}/${Date.now()}_${file.name}`);
      await uploadBytes(fileRef, file);
      const downloadURL = await getDownloadURL(fileRef);

      // Add attachment info to ticket
      const attachmentData = {
        name: file.name,
        url: downloadURL,
        size: file.size,
        uploadedBy: itStaffInfo.displayName,
        uploadedAt: new Date().toISOString(),
      };

      const attachments = ticket.attachments || [];
      attachments.push(attachmentData);

      await update(ref(database, `tickets/${ticket.ticketId}`), {
        attachments: attachments,
        updatedAt: new Date().toISOString(),
      });

      // Send notification message
      const messageData = {
        text: `File attached: ${file.name}`,
        sentBy: {
          uid: itStaffInfo.uid,
          displayName: itStaffInfo.displayName,
          email: itStaffInfo.email,
          role: 'IT Staff'
        },
        sentAt: new Date().toISOString(),
        emailSent: false,
        isSystemMessage: true,
      };

      const messageRef = ref(database, `tickets/${ticket.ticketId}/messages`);
      await update(messageRef, {
        [Date.now()]: messageData
      });

      onUpdate();
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Failed to upload file. Please try again.');
    } finally {
      setUploadingFile(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-indigo-600 text-white p-6 flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h2>{ticket.title}</h2>
              <span className={`px-3 py-1 rounded-full text-sm border ${getPriorityColor(ticket.priority)}`}>
                {ticket.priority}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(status)}`}>
                {status.replace('_', ' ')}
              </span>
            </div>
            <p className="text-indigo-100">Ticket ID: {ticket.ticketId}</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-indigo-200 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="grid md:grid-cols-3 gap-6 p-6">
            {/* Left Column - Ticket Details */}
            <div className="md:col-span-2 space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-gray-900 mb-2">Description</h3>
                <p className="text-gray-600 bg-gray-50 p-4 rounded-lg">{ticket.description}</p>
              </div>

              {/* Attachments */}
              {ticket.attachments && ticket.attachments.length > 0 && (
                <div>
                  <h3 className="text-gray-900 mb-2">Attachments</h3>
                  <div className="space-y-2">
                    {ticket.attachments.map((attachment: any, index: number) => (
                      <a
                        key={index}
                        href={attachment.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <FileText className="text-indigo-600" size={20} />
                        <div className="flex-1">
                          <p className="text-gray-900">{attachment.name}</p>
                          <p className="text-gray-500">{(attachment.size / 1024).toFixed(2)} KB</p>
                        </div>
                        <Download className="text-gray-400" size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Messages/Communication Thread */}
              <div>
                <h3 className="text-gray-900 mb-4">Communication Thread</h3>
                <div className="space-y-4 bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
                  {messages.length > 0 ? (
                    messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`p-4 rounded-lg ${
                          msg.sentBy.role === 'it_staff'
                            ? 'bg-indigo-100 ml-8'
                            : 'bg-white mr-8'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <User size={16} className="text-gray-600" />
                            <span className="text-gray-900">{msg.sentBy.displayName || msg.sentBy.name}</span>
                            {msg.sentBy.role === 'IT Staff' && (
                              <span className="text-indigo-600">(IT Staff)</span>
                            )}
                          </div>
                          <span className="text-gray-500">{new Date(msg.sentAt).toLocaleString()}</span>
                        </div>
                        <p className="text-gray-700">{msg.text}</p>
                        {msg.emailSent && (
                          <p className="text-green-600 mt-2">✓ Email sent</p>
                        )}
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-center py-8">No messages yet</p>
                  )}
                </div>

                {/* Message Input */}
                {isOwner && status !== 'closed' && (
                  <div className="mt-4 flex gap-2">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Type a message to the user..."
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={loading || !message.trim()}
                      className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      <Send size={20} />
                      Send
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - User & Actions */}
            <div className="space-y-6">
              {/* User Information */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="text-gray-900 mb-4">User Information</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start gap-2">
                    <User size={18} className="mt-0.5 text-gray-500" />
                    <div>
                      <p className="text-gray-500">Name</p>
                      <p className="text-gray-900">{ticket.createdBy.name}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail size={18} className="mt-0.5 text-gray-500" />
                    <div>
                      <p className="text-gray-500">Email</p>
                      <p className="text-gray-900">{ticket.createdBy.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone size={18} className="mt-0.5 text-gray-500" />
                    <div>
                      <p className="text-gray-500">Contact</p>
                      <p className="text-gray-900">{ticket.contactNumber}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin size={18} className="mt-0.5 text-gray-500" />
                    <div>
                      <p className="text-gray-500">Location</p>
                      <p className="text-gray-900">{ticket.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <User size={18} className="mt-0.5 text-gray-500" />
                    <div>
                      <p className="text-gray-500">Department</p>
                      <p className="text-gray-900">{ticket.createdBy.department}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Claimed By */}
              {ticket.claimedBy && (
                <div className="bg-purple-50 rounded-lg p-4">
                  <h3 className="text-gray-900 mb-2">Assigned To</h3>
                  <p className="text-gray-900">{ticket.claimedBy.displayName}</p>
                  <p className="text-gray-600">{ticket.claimedBy.email}</p>
                  <p className="text-gray-500 mt-2">
                    <Clock size={14} className="inline mr-1" />
                    {new Date(ticket.claimedAt).toLocaleString()}
                  </p>
                </div>
              )}

              {/* Timestamps */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-gray-900 mb-3">Timeline</h3>
                <div className="space-y-2 text-gray-600">
                  <div>
                    <p className="text-gray-500">Created</p>
                    <p>{new Date(ticket.createdAt).toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Last Updated</p>
                    <p>{new Date(ticket.updatedAt).toLocaleString()}</p>
                  </div>
                  {ticket.closedAt && (
                    <div>
                      <p className="text-gray-500">Closed</p>
                      <p>{new Date(ticket.closedAt).toLocaleString()}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Actions */}
              {isOwner && (
                <div className="space-y-3">
                  <h3 className="text-gray-900">Actions</h3>
                  {status !== 'closed' && (
                    <>
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        disabled={uploadingFile}
                        className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                      >
                        {uploadingFile ? (
                          <>
                            <Upload size={18} className="animate-pulse" />
                            Uploading...
                          </>
                        ) : (
                          <>
                            <Paperclip size={18} />
                            Attach File
                          </>
                        )}
                      </button>
                      <button
                        onClick={() => handleStatusChange(status === 'in_progress' ? 'open' : 'in_progress')}
                        className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                      >
                        Mark as {status === 'in_progress' ? 'Open' : 'In Progress'}
                      </button>
                      <button
                        onClick={() => handleStatusChange('closed')}
                        className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        Close Ticket
                      </button>
                      <button
                        onClick={handleTransferTicket}
                        className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Transfer Ticket
                      </button>
                    </>
                  )}
                </div>
              )}

              {!isOwner && ticket.claimedBy && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800">
                    This ticket is currently being handled by {ticket.claimedBy.displayName}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}