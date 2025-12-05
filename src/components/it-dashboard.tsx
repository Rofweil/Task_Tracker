import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { signOut } from 'firebase/auth';
import { database, auth } from '../lib/firebase';
import { ClaimTicketModal } from './claim-ticket-modal';
import { TicketDetailModal } from './ticket-detail-modal';
import { TicketReport } from './ticket-report';
import { UserManagement } from './user-management';
import { 
  LogOut, 
  Ticket, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Search,
  Filter,
  User,
  Mail,
  MapPin,
  Calendar,
  FileText,
  Users
} from 'lucide-react';

interface ITDashboardProps {
  user: any;
}

export function ITDashboard({ user }: ITDashboardProps) {
  const [tickets, setTickets] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [itStaffInfo, setItStaffInfo] = useState<any>(null);
  const [selectedTicket, setSelectedTicket] = useState<any>(null);
  const [claimingTicket, setClaimingTicket] = useState<any>(null);
  const [showReport, setShowReport] = useState(false);
  const [showUserManagement, setShowUserManagement] = useState(false);
  const [filter, setFilter] = useState('all'); // all, open, claimed, myclaimed
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  useEffect(() => {
    // Load IT staff info
    const staffRef = ref(database, `users/${user.uid}`);
    onValue(staffRef, (snapshot) => {
      if (snapshot.exists()) {
        setItStaffInfo({ ...snapshot.val(), uid: user.uid });
      }
    });

    // Load all tickets
    const ticketsRef = ref(database, 'tickets');
    onValue(ticketsRef, (snapshot) => {
      if (snapshot.exists()) {
        const ticketsData = snapshot.val();
        const ticketsList = Object.values(ticketsData).map((ticket: any) => ticket);
        // Sort by created date (newest first)
        ticketsList.sort((a: any, b: any) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setTickets(ticketsList);
      } else {
        setTickets([]);
      }
    });

    // Load all users
    const usersRef = ref(database, 'users');
    onValue(usersRef, (snapshot) => {
      if (snapshot.exists()) {
        const usersData = snapshot.val();
        const usersList = Object.values(usersData).map((user: any) => user);
        setUsers(usersList);
      } else {
        setUsers([]);
      }
    });
  }, [user.uid]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleTicketClick = (ticket: any) => {
    if (!ticket.claimedBy) {
      // Unclaimed ticket - show claim modal
      setClaimingTicket(ticket);
    } else {
      // Claimed ticket - show detail modal
      setSelectedTicket(ticket);
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500 bg-red-50';
      case 'medium': return 'border-l-yellow-500 bg-yellow-50';
      case 'low': return 'border-l-green-500 bg-green-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

  const getStatusBadge = (ticket: any) => {
    if (ticket.status === 'closed') {
      return <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">Closed</span>;
    }
    if (ticket.claimedBy) {
      return <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">In Progress</span>;
    }
    return <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Open</span>;
  };

  const filteredTickets = tickets.filter(ticket => {
    // Status filter
    if (filter === 'open' && ticket.claimedBy) return false;
    if (filter === 'claimed' && !ticket.claimedBy) return false;
    if (filter === 'myclaimed' && ticket.claimedBy?.uid !== user.uid) return false;

    // Category filter
    if (categoryFilter !== 'all' && ticket.category !== categoryFilter) return false;

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        ticket.title.toLowerCase().includes(query) ||
        ticket.description.toLowerCase().includes(query) ||
        ticket.createdBy.name.toLowerCase().includes(query) ||
        ticket.ticketId.toLowerCase().includes(query)
      );
    }

    return true;
  });

  const stats = {
    total: tickets.length,
    open: tickets.filter(t => !t.claimedBy && t.status !== 'closed').length,
    inProgress: tickets.filter(t => t.claimedBy && t.status !== 'closed').length,
    myClaimed: tickets.filter(t => t.claimedBy?.uid === user.uid && t.status !== 'closed').length,
  };

  if (!itStaffInfo) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-indigo-600">IT Staff Dashboard</h1>
              <p className="text-gray-600">Welcome back, {itStaffInfo.displayName || itStaffInfo.name}</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowUserManagement(true)}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Users size={20} />
                Manage Users
              </button>
              <button
                onClick={() => setShowReport(true)}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <FileText size={20} />
                Generate Report
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <LogOut size={20} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-indigo-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Total Tickets</p>
                <p className="text-gray-900 mt-1">{stats.total}</p>
              </div>
              <Ticket className="text-indigo-500" size={32} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Open Tickets</p>
                <p className="text-gray-900 mt-1">{stats.open}</p>
              </div>
              <AlertCircle className="text-blue-500" size={32} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">In Progress</p>
                <p className="text-gray-900 mt-1">{stats.inProgress}</p>
              </div>
              <Clock className="text-purple-500" size={32} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">My Tickets</p>
                <p className="text-gray-900 mt-1">{stats.myClaimed}</p>
              </div>
              <CheckCircle className="text-green-500" size={32} />
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">
                <Search className="inline mr-2" size={18} />
                Search
              </label>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, description, or ticket ID..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                <Filter className="inline mr-2" size={18} />
                Status Filter
              </label>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="all">All Tickets</option>
                <option value="open">Open (Unclaimed)</option>
                <option value="claimed">Claimed by Anyone</option>
                <option value="myclaimed">My Claimed Tickets</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                <Filter className="inline mr-2" size={18} />
                Category
              </label>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                <option value="hardware">Hardware</option>
                <option value="software">Software</option>
                <option value="network">Network</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tickets List */}
        <div className="space-y-4">
          {filteredTickets.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm p-12 text-center">
              <Ticket className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-gray-600">No tickets found</p>
            </div>
          ) : (
            filteredTickets.map((ticket) => {
              const isClaimed = !!ticket.claimedBy;
              const isMyTicket = ticket.claimedBy?.uid === user.uid;
              const isDisabled = isClaimed && !isMyTicket;

              return (
                <div
                  key={ticket.ticketId}
                  onClick={() => !isDisabled && handleTicketClick(ticket)}
                  className={`bg-white rounded-xl shadow-sm border-l-4 ${getPriorityColor(ticket.priority)} p-6 cursor-pointer transition-all hover:shadow-md ${
                    isDisabled ? 'opacity-60 cursor-not-allowed' : ''
                  }`}
                >
                  <div className="grid md:grid-cols-12 gap-6">
                    {/* Left side - Ticket info */}
                    <div className="md:col-span-8">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-gray-900 mb-1">{ticket.title}</h3>
                          <p className="text-gray-600 line-clamp-2">{ticket.description}</p>
                        </div>
                        <div className="ml-4">
                          {getStatusBadge(ticket)}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-gray-600">
                        <div className="flex items-center gap-1">
                          <Ticket size={16} />
                          <span>{ticket.ticketId}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User size={16} />
                          <span>{ticket.createdBy.name}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Mail size={16} />
                          <span>{ticket.createdBy.email}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{ticket.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{new Date(ticket.createdAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right side - Priority and status */}
                    <div className="md:col-span-4 flex flex-col items-end justify-between">
                      <div className="text-right">
                        <p className="text-gray-500 mb-1">Priority</p>
                        <p className="text-gray-900 capitalize">{ticket.priority}</p>
                      </div>

                      {isClaimed && (
                        <div className="text-right">
                          <p className="text-gray-500 mb-1">Assigned to</p>
                          <p className={`${isMyTicket ? 'text-green-600' : 'text-gray-900'}`}>
                            {isMyTicket ? 'You' : (ticket.claimedBy.displayName || ticket.claimedBy.name)}
                          </p>
                        </div>
                      )}

                      {!isClaimed && (
                        <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                          Claim Ticket
                        </button>
                      )}

                      {isMyTicket && (
                        <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                          View Details
                        </button>
                      )}

                      {isDisabled && (
                        <div className="text-yellow-700 text-right">
                          <AlertCircle size={20} className="inline mr-1" />
                          Locked by {ticket.claimedBy.displayName || ticket.claimedBy.name}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Modals */}
      {claimingTicket && (
        <ClaimTicketModal
          ticket={claimingTicket}
          itStaffInfo={itStaffInfo}
          onClose={() => setClaimingTicket(null)}
          onClaimed={() => {
            setClaimingTicket(null);
            // Refresh happens automatically via Firebase listener
          }}
        />
      )}

      {selectedTicket && (
        <TicketDetailModal
          ticket={selectedTicket}
          itStaffInfo={itStaffInfo}
          onClose={() => setSelectedTicket(null)}
          onUpdate={() => {
            // Refresh happens automatically via Firebase listener
          }}
        />
      )}

      {showReport && (
        <TicketReport
          tickets={tickets}
          onClose={() => setShowReport(false)}
        />
      )}

      {showUserManagement && (
        <UserManagement
          users={users}
          currentUser={itStaffInfo}
          onClose={() => setShowUserManagement(false)}
          onUpdate={() => {
            // Refresh happens automatically via Firebase listener
          }}
        />
      )}
    </div>
  );
}