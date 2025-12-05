import { useState } from 'react';
import { X, Send } from 'lucide-react';
import { ref, update } from 'firebase/database';
import { database } from '../lib/firebase';
import { sendEmail } from '../lib/emailService';

interface ClaimTicketModalProps {
  ticket: any;
  itStaffInfo: any;
  onClose: () => void;
  onClaimed: () => void;
}

export function ClaimTicketModal({ ticket, itStaffInfo, onClose, onClaimed }: ClaimTicketModalProps) {
  const defaultMessage = `Hi ${ticket.createdBy.name},\n\nI have received your ticket regarding "${ticket.title}". I will look into this issue and get back to you shortly.\n\nBest regards,\n${itStaffInfo.displayName}\nIT Support`;
  
  const [message, setMessage] = useState(defaultMessage);
  const [loading, setLoading] = useState(false);

  const handleClaim = async () => {
    if (!message.trim()) {
      alert('Please enter a message to send to the user');
      return;
    }

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
        emailSent: true // Indicates email was sent
      };

      // Update ticket with claimed info and first message
      await update(ref(database, `tickets/${ticket.ticketId}`), {
        status: 'in_progress',
        claimedBy: {
          uid: itStaffInfo.uid,
          displayName: itStaffInfo.displayName,
          email: itStaffInfo.email,
        },
        claimedAt: now,
        updatedAt: now,
        lastMessage: messageData,
      });

      // Add message to messages collection
      const messageRef = ref(database, `tickets/${ticket.ticketId}/messages`);
      await update(messageRef, {
        [Date.now()]: messageData
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

      onClaimed();
    } catch (error) {
      console.error('Error claiming ticket:', error);
      alert('Failed to claim ticket. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <h2 className="text-gray-900">Claim Ticket</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Ticket Details */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-3">
            <h3 className="text-gray-900">Ticket Details</h3>
            <div className="grid grid-cols-2 gap-4 text-gray-600">
              <div>
                <span className="text-gray-500">Title:</span> {ticket.title}
              </div>
              <div>
                <span className="text-gray-500">Category:</span> {ticket.category}
              </div>
              <div>
                <span className="text-gray-500">Priority:</span> {ticket.priority}
              </div>
              <div>
                <span className="text-gray-500">Location:</span> {ticket.location}
              </div>
            </div>
            <div>
              <span className="text-gray-500">Description:</span>
              <p className="mt-1">{ticket.description}</p>
            </div>
          </div>

          {/* User Info */}
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="text-gray-900 mb-2">User Information</h3>
            <div className="space-y-1 text-gray-600">
              <p><span className="text-gray-500">Name:</span> {ticket.createdBy.name}</p>
              <p><span className="text-gray-500">Email:</span> {ticket.createdBy.email}</p>
              <p><span className="text-gray-500">Department:</span> {ticket.createdBy.department}</p>
              <p><span className="text-gray-500">Contact:</span> {ticket.contactNumber}</p>
            </div>
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-gray-700 mb-2">
              Initial Message to User *
            </label>
            <p className="text-gray-500 mb-3">
              This message will be sent to the user via email from your IT staff account ({itStaffInfo.email})
            </p>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
              placeholder={`Hi ${ticket.createdBy.name},\n\nI have received your ticket regarding "${ticket.title}". I will look into this issue and get back to you shortly.\n\nBest regards,\n${itStaffInfo.displayName}\nIT Support`}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={onClose}
              disabled={loading}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              onClick={handleClaim}
              disabled={loading || !message.trim()}
              className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Send size={20} />
              {loading ? 'Claiming...' : 'Claim & Send Message'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}