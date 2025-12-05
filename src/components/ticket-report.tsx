import { useState, useMemo } from 'react';
import { X, Download, Printer, FileText, Filter, Calendar, TrendingUp, CheckCircle, Clock, AlertCircle } from 'lucide-react';

interface TicketReportProps {
  tickets: any[];
  onClose: () => void;
}

export function TicketReport({ tickets, onClose }: TicketReportProps) {
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [priorityFilter, setPriorityFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [dateRange, setDateRange] = useState<string>('all');

  // Calculate statistics
  const stats = useMemo(() => {
    const now = new Date();
    const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    let filteredTickets = tickets;

    // Apply date range filter
    if (dateRange !== 'all') {
      filteredTickets = tickets.filter(ticket => {
        const createdDate = new Date(ticket.createdAt);
        if (dateRange === 'today') return createdDate >= oneDayAgo;
        if (dateRange === 'week') return createdDate >= oneWeekAgo;
        if (dateRange === 'month') return createdDate >= oneMonthAgo;
        return true;
      });
    }

    // Apply status filter
    if (statusFilter !== 'all') {
      filteredTickets = filteredTickets.filter(t => t.status === statusFilter);
    }

    // Apply priority filter
    if (priorityFilter !== 'all') {
      filteredTickets = filteredTickets.filter(t => t.priority === priorityFilter);
    }

    // Apply category filter
    if (categoryFilter !== 'all') {
      filteredTickets = filteredTickets.filter(t => t.category === categoryFilter);
    }

    return {
      total: filteredTickets.length,
      open: filteredTickets.filter(t => t.status === 'open').length,
      inProgress: filteredTickets.filter(t => t.status === 'in_progress').length,
      closed: filteredTickets.filter(t => t.status === 'closed').length,
      high: filteredTickets.filter(t => t.priority === 'high').length,
      medium: filteredTickets.filter(t => t.priority === 'medium').length,
      low: filteredTickets.filter(t => t.priority === 'low').length,
      hardware: filteredTickets.filter(t => t.category === 'hardware').length,
      software: filteredTickets.filter(t => t.category === 'software').length,
      network: filteredTickets.filter(t => t.category === 'network').length,
      account: filteredTickets.filter(t => t.category === 'account').length,
      other: filteredTickets.filter(t => t.category === 'other').length,
      filteredTickets,
    };
  }, [tickets, statusFilter, priorityFilter, categoryFilter, dateRange]);

  const exportToCSV = () => {
    const headers = ['Ticket ID', 'Title', 'Category', 'Priority', 'Status', 'Created By', 'Email', 'Department', 'Created At', 'Claimed By', 'Claimed At', 'Updated At'];
    
    const rows = stats.filteredTickets.map(ticket => [
      ticket.ticketId,
      `"${ticket.title}"`,
      ticket.category,
      ticket.priority,
      ticket.status,
      ticket.createdBy.name,
      ticket.createdBy.email,
      ticket.createdBy.department || 'N/A',
      new Date(ticket.createdAt).toLocaleString(),
      ticket.claimedBy?.displayName || 'Unclaimed',
      ticket.claimedAt ? new Date(ticket.claimedAt).toLocaleString() : 'N/A',
      ticket.updatedAt ? new Date(ticket.updatedAt).toLocaleString() : 'N/A',
    ]);

    const csv = [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ticket-report-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'text-blue-600 bg-blue-50';
      case 'in_progress': return 'text-purple-600 bg-purple-50';
      case 'closed': return 'text-gray-600 bg-gray-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden flex flex-col print:max-w-full print:max-h-full print:shadow-none">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 print:border-black">
          <div>
            <h2 className="text-gray-900 flex items-center gap-2">
              <FileText className="text-indigo-600" size={24} />
              Ticket Report
            </h2>
            <p className="text-gray-600 mt-1">
              Generated on {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
            </p>
          </div>
          <div className="flex items-center gap-2 print:hidden">
            <button
              onClick={exportToCSV}
              className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
              title="Export to CSV"
            >
              <Download size={20} />
            </button>
            <button
              onClick={handlePrint}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              title="Print Report"
            >
              <Printer size={20} />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="p-6 border-b border-gray-200 bg-gray-50 print:hidden">
          <div className="flex items-center gap-2 mb-3">
            <Filter size={18} className="text-gray-600" />
            <h3 className="text-gray-900">Filters</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-gray-700 mb-1 text-sm">Date Range</label>
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              >
                <option value="all">All Time</option>
                <option value="today">Last 24 Hours</option>
                <option value="week">Last 7 Days</option>
                <option value="month">Last 30 Days</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-1 text-sm">Status</label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              >
                <option value="all">All Statuses</option>
                <option value="open">Open</option>
                <option value="in_progress">In Progress</option>
                <option value="closed">Closed</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-1 text-sm">Priority</label>
              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              >
                <option value="all">All Priorities</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-1 text-sm">Category</label>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              >
                <option value="all">All Categories</option>
                <option value="hardware">Hardware</option>
                <option value="software">Software</option>
                <option value="network">Network</option>
                <option value="account">Account</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="p-6 space-y-6 overflow-y-auto flex-1">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-indigo-700 text-sm">Total Tickets</p>
                  <p className="text-indigo-900 mt-1">{stats.total}</p>
                </div>
                <FileText className="text-indigo-600" size={32} />
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-700 text-sm">Open</p>
                  <p className="text-blue-900 mt-1">{stats.open}</p>
                </div>
                <AlertCircle className="text-blue-600" size={32} />
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-700 text-sm">In Progress</p>
                  <p className="text-purple-900 mt-1">{stats.inProgress}</p>
                </div>
                <Clock className="text-purple-600" size={32} />
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-700 text-sm">Closed</p>
                  <p className="text-green-900 mt-1">{stats.closed}</p>
                </div>
                <CheckCircle className="text-green-600" size={32} />
              </div>
            </div>
          </div>

          {/* Priority & Category Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Priority Breakdown */}
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h3 className="text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="text-gray-600" size={20} />
                Priority Breakdown
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">High Priority</span>
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full">{stats.high}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Medium Priority</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full">{stats.medium}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Low Priority</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">{stats.low}</span>
                </div>
              </div>
            </div>

            {/* Category Breakdown */}
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h3 className="text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="text-gray-600" size={20} />
                Category Breakdown
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Hardware</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">{stats.hardware}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Software</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">{stats.software}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Network</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">{stats.network}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Account</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">{stats.account}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Other</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">{stats.other}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Ticket List */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="p-4 bg-gray-50 border-b border-gray-200">
              <h3 className="text-gray-900">Detailed Ticket List</h3>
              <p className="text-gray-600 text-sm mt-1">Showing {stats.filteredTickets.length} ticket(s)</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-4 py-3 text-gray-700 text-sm">Ticket ID</th>
                    <th className="text-left px-4 py-3 text-gray-700 text-sm">Title</th>
                    <th className="text-left px-4 py-3 text-gray-700 text-sm">Category</th>
                    <th className="text-left px-4 py-3 text-gray-700 text-sm">Priority</th>
                    <th className="text-left px-4 py-3 text-gray-700 text-sm">Status</th>
                    <th className="text-left px-4 py-3 text-gray-700 text-sm">Created By</th>
                    <th className="text-left px-4 py-3 text-gray-700 text-sm">Claimed By</th>
                    <th className="text-left px-4 py-3 text-gray-700 text-sm">Created At</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.filteredTickets.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="text-center py-8 text-gray-500">
                        No tickets found matching the selected filters
                      </td>
                    </tr>
                  ) : (
                    stats.filteredTickets.map((ticket) => (
                      <tr key={ticket.ticketId} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-4 py-3 text-gray-900 text-sm">{ticket.ticketId}</td>
                        <td className="px-4 py-3 text-gray-900 text-sm max-w-xs truncate">{ticket.title}</td>
                        <td className="px-4 py-3 text-gray-700 text-sm capitalize">{ticket.category}</td>
                        <td className="px-4 py-3 text-sm">
                          <span className={`px-2 py-1 rounded-full text-xs capitalize ${getPriorityColor(ticket.priority)}`}>
                            {ticket.priority}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <span className={`px-2 py-1 rounded-full text-xs capitalize ${getStatusColor(ticket.status)}`}>
                            {ticket.status.replace('_', ' ')}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-700 text-sm">{ticket.createdBy.name}</td>
                        <td className="px-4 py-3 text-gray-700 text-sm">
                          {ticket.claimedBy?.displayName || 'Unclaimed'}
                        </td>
                        <td className="px-4 py-3 text-gray-700 text-sm">
                          {new Date(ticket.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @media print {
            @page {
              size: landscape;
              margin: 1cm;
            }
            .print\\:hidden {
              display: none !important;
            }
            .print\\:max-w-full {
              max-width: 100% !important;
            }
            .print\\:max-h-full {
              max-height: 100% !important;
            }
            .print\\:shadow-none {
              box-shadow: none !important;
            }
            body {
              print-color-adjust: exact;
              -webkit-print-color-adjust: exact;
            }
          }
        `}
      </style>
    </div>
  );
}
