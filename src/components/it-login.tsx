import { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { ref, set, get } from 'firebase/database';
import { auth, database } from '../lib/firebase';
import { AlertCircle, CheckCircle, Mail, Lock, User } from 'lucide-react';

interface ITLoginProps {
  onLogin: () => void;
}

export function ITLogin({ onLogin }: ITLoginProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isSignUp) {
        // Create new IT staff account
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save IT staff info to database
        await set(ref(database, `users/${user.uid}`), {
          email: email,
          displayName: name,
          role: 'IT Staff',
          createdAt: new Date().toISOString(),
        });

        onLogin();
      } else {
        // Sign in existing IT staff
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Verify user is IT staff
        const staffRef = ref(database, `users/${user.uid}`);
        const snapshot = await get(staffRef);

        if (!snapshot.exists()) {
          // Sign out the user since they're not IT staff
          await signOut(auth);
          throw new Error('User account not found in database');
        }

        const userData = snapshot.val();
        if (userData.role !== 'IT Staff') {
          // Sign out the user since they're not IT staff
          await signOut(auth);
          throw new Error('Access denied. This portal is for IT Staff only.');
        }

        onLogin();
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8">
        {/* Login/Signup Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <h1 className="text-indigo-600 mb-2">IT Staff Portal</h1>
            <p className="text-gray-600">
              {isSignUp ? 'Create your IT staff account' : 'Sign in to manage support tickets'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {isSignUp && (
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="your.email@company.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700">
                <AlertCircle size={20} />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Processing...' : isSignUp ? 'Create Account' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError('');
              }}
              className="text-indigo-600 hover:text-indigo-700"
            >
              {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
            </button>
          </div>
        </div>

        {/* System Information */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-indigo-600 mb-6">Ticket System Guide</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                How It Works
              </h3>
              <ul className="space-y-2 text-gray-600 ml-7">
                <li>• View all incoming support tickets from users</li>
                <li>• Claim tickets to begin working on them</li>
                <li>• Send updates and communicate with users</li>
                <li>• Track ticket status until resolution</li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                Ticket Claiming
              </h3>
              <ul className="space-y-2 text-gray-600 ml-7">
                <li>• Click on any open ticket to view details</li>
                <li>• Click "Claim Ticket" to assign it to yourself</li>
                <li>• Send an initial message to the user</li>
                <li>• Claimed tickets are locked to prevent conflicts</li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                Communication
              </h3>
              <ul className="space-y-2 text-gray-600 ml-7">
                <li>• Users receive email notifications automatically</li>
                <li>• Email thread continues until ticket is closed</li>
                <li>• All messages are logged in the system</li>
                <li>• Transfer tickets to other IT staff if needed</li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                Ticket Priorities
              </h3>
              <div className="ml-7 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="text-gray-600">High - Urgent issues requiring immediate attention</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span className="text-gray-600">Medium - Important but not critical</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span className="text-gray-600">Low - Can be handled when time permits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}