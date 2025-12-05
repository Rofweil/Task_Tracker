import { useState, useMemo } from 'react';
import { X, Trash2, Search, User, Mail, Shield, AlertTriangle, Calendar } from 'lucide-react';
import { ref, remove } from 'firebase/database';
import { database } from '../lib/firebase';

interface UserManagementProps {
  users: any[];
  currentUser: any;
  onClose: () => void;
  onUpdate: () => void;
}

export function UserManagement({ users, currentUser, onClose, onUpdate }: UserManagementProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [deletingUserId, setDeletingUserId] = useState<string | null>(null);

  // Normalize users (Default missing role → "user")
  const normalizedUsers = users.map((u) => ({
    ...u,
    role: u.role || "user",     // ensure normal users show up
    department: u.department || "Unknown"
  }));

  // Filtered user list
  const filteredUsers = useMemo(() => {
    let filtered = normalizedUsers;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter((user) =>
        (user.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.displayName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.email?.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Role filter
    if (roleFilter !== 'all') {
      filtered = filtered.filter((user) => user.role === roleFilter);
    }

    return filtered;
  }, [normalizedUsers, searchQuery, roleFilter]);

  const handleDeleteUser = async (userId: string, userEmail: string, userName: string) => {
    if (userId === currentUser.uid) {
      alert('You cannot delete your own account.');
      return;
    }

    const confirmed = confirm(
      `Delete user "${userName}" (${userEmail})?\n\n` +
        "This will remove them from the database.\n\n" +
        "⚠ They can still sign in using Firebase Auth.\n" +
        "To fully remove login access, delete them in Firebase Console."
    );

    if (!confirmed) return;

    setDeletingUserId(userId);

    try {
      await remove(ref(database, `users/${userId}`));

      alert(`User "${userName}" has been deleted.`);
      onUpdate();
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Delete failed, please try again.');
    } finally {
      setDeletingUserId(null);
    }
  };

  const getRoleBadgeColor = (role: string) => {
    if (role === 'IT Staff') {
      return 'bg-indigo-100 text-indigo-700 border-indigo-200';
    }
    return 'bg-gray-100 text-gray-700 border-gray-200';
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div>
            <h2 className="text-white flex items-center gap-2">
              <Shield size={24} />
              User Management
            </h2>
            <p className="text-indigo-100 mt-1">Manage all system users</p>
          </div>
          <button onClick={onClose} className="text-white hover:text-indigo-200">
            <X size={24} />
          </button>
        </div>

        {/* Filters */}
        <div className="p-6 border-b border-gray-200 bg-gray-50">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search users..."
                  className="w-full pl-11 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              >
                <option value="all">All Users</option>
                <option value="user">Normal Users</option>
                <option value="IT Staff">IT Staff</option>
              </select>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-2 text-gray-600">
            <User size={16} />
            <span>Showing {filteredUsers.length} of {normalizedUsers.length} users</span>
          </div>
        </div>

        {/* User List */}
        <div className="flex-1 overflow-y-auto p-6">
          {filteredUsers.length === 0 ? (
            <div className="text-center py-12">
              <User className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-gray-500">No users found</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {filteredUsers.map((user) => (
                <div key={user.uid} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md">

                  {/* User Card */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                          <User className="text-indigo-600" size={20} />
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-gray-900">
                              {user.name || user.displayName || 'Unnamed User'}
                            </h3>

                            <span className={`px-2 py-1 rounded-full text-xs border ${getRoleBadgeColor(user.role)}`}>
                              {user.role}
                            </span>

                            {user.uid === currentUser.uid && (
                              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                                You
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-4 mt-1 text-gray-600">
                            <div className="flex items-center gap-1">
                              <Mail size={14} />
                              <span>{user.email}</span>
                            </div>

                            {user.department && (
                              <span className="text-gray-500">Dept: {user.department}</span>
                            )}
                          </div>

                          {user.createdAt && (
                            <div className="flex items-center gap-1 mt-1 text-gray-500">
                              <Calendar size={14} />
                              <span>Joined {new Date(user.createdAt).toLocaleDateString()}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Delete Button */}
                    <div className="flex items-center gap-2">
                      {user.uid !== currentUser.uid && (
                        <button
                          onClick={() => handleDeleteUser(user.uid, user.email, user.name || user.displayName)}
                          disabled={deletingUserId === user.uid}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg disabled:opacity-50"
                        >
                          {deletingUserId === user.uid ? (
                            <div className="w-5 h-5 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
                          ) : (
                            <Trash2 size={20} />
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Warning */}
        <div className="p-4 bg-yellow-50 border-t border-yellow-200">
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-yellow-600 mt-0.5" size={20} />
            <div className="text-yellow-800">
              <p className="font-medium">Important:</p>
              <ul className="mt-1 text-sm space-y-1 list-disc list-inside">
                <li>Deleting a user removes them from Database only</li>
                <li>Users can still sign in unless deleted in Firebase Authentication</li>
                <li>IT Staff should not be deleted unless intentional</li>
                <li>You cannot delete your own account</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
