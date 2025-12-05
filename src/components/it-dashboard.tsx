// ------------------- IMPORTS -------------------------
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
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // ------------------- FIXED USER LOADING -------------------------
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
        ticketsList.sort((a: any, b: any) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setTickets(ticketsList);
      } else {
        setTickets([]);
      }
    });

    // ✅ FIXED: Load all users AND keep UID
    const usersRef = ref(database, 'users');
    onValue(usersRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const list = Object.entries(data).map(([uid, user]: any) => ({
          uid,
          ...user,
        }));
        setUsers(list);
      } else {
        setUsers([]);
      }
    });
  }, [user.uid]);

  // ------------------- LOGOUT -------------------------
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // ------------------- TICKET CLICK -------------------------
  const handleTicketClick = (ticket: any) => {
    if (!ticket.claimedBy) setClaimingTicket(ticket);
    else setSelectedTicket(ticket);
  };

  // ------------------- PRIORITY COLOR -------------------------
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500 bg-red-50';
      case 'medium': return 'border-l-yellow-500 bg-yellow-50';
      case 'low': return 'border-l-green-500 bg-green-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

  // ------------------- STATUS BADGES -------------------------
  const getStatusBadge = (ticket: any) => {
    if (ticket.status === 'closed')
      return <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">Closed</span>;
    if (ticket.claimedBy)
      return <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">In Progress</span>;
    return <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Open</span>;
  };

  // ------------------- FILTERS -------------------------
  const filteredTickets = tickets.filter(ticket => {
    if (filter === 'open' && ticket.claimedBy) return false;
    if (filter === 'claimed' && !ticket.claimedBy) return false;
    if (filter === 'myclaimed' && ticket.claimedBy?.uid !== user.uid) return false;
    if (categoryFilter !== 'all' && ticket.category !== categoryFilter) return false;

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        ticket.title.toLowerCase().includes(q) ||
        ticket.description.toLowerCase().includes(q) ||
        ticket.createdBy.name.toLowerCase().includes(q) ||
        ticket.ticketId.toLowerCase().includes(q)
      );
    }
    return true;
  });

  // ------------------- TICKET STATS -------------------------
  const stats = {
    total: tickets.length,
    open: tickets.filter(t => !t.claimedBy && t.status !== 'closed').length,
    inProgress: tickets.filter(t => t.claimedBy && t.status !== 'closed').length,
    myClaimed: tickets.filter(t => t.claimedBy?.uid === user.uid && t.status !== 'closed').length,
  };

  // ------------------- LOADING UI -------------------------
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

  // ------------------- UI START -------------------------
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}
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

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ------------------- TICKET LIST AND UI BELOW... (unchanged) ------------------- */}

        {/* MODALS */}
        {claimingTicket && (
          <ClaimTicketModal
            ticket={claimingTicket}
            itStaffInfo={itStaffInfo}
            onClose={() => setClaimingTicket(null)}
          />
        )}

        {selectedTicket && (
          <TicketDetailModal
            ticket={selectedTicket}
            itStaffInfo={itStaffInfo}
            onClose={() => setSelectedTicket(null)}
          />
        )}

        {showReport && (
          <TicketReport
            tickets={tickets}
            onClose={() => setShowReport(false)}
          />
        )}

        {/* ✅ FIXED — Users passed with UID + department */}
        {showUserManagement && (
          <UserManagement
            users={users}
            currentUser={itStaffInfo}
            onClose={() => setShowUserManagement(false)}
          />
        )}
      </div>
    </div>
  );
}
