import { useState } from 'react';
import { X } from 'lucide-react';

interface AuthModalProps {
  mode: 'signin' | 'signup';
  onClose: () => void;
  onSwitchMode: () => void;
}

export function AuthModal({ mode, onClose, onSwitchMode }: AuthModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication - in real app, this would connect to backend
    console.log(mode === 'signin' ? 'Signing in...' : 'Signing up...', { email, password });
    alert(`${mode === 'signin' ? 'Sign in' : 'Sign up'} functionality would connect to authentication service`);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-gray-900 mb-6">
          {mode === 'signin' ? 'Sign In' : 'Create Account'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <>
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="department" className="block text-gray-700 mb-2">
                  Department
                </label>
                <select
                  id="department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                >
                  <option value="">Select Department</option>
                  <option value="general-manager">General Manager</option>
                  <option value="accounts">Accounts</option>
                  <option value="social-media">Social Media</option>
                  <option value="reservation">Reservation</option>
                  <option value="admin">Admin</option>
                  <option value="customer-service">Customer Service</option>
                  <option value="human-resource">Human Resource</option>
                  <option value="technical">Technical</option>
                  <option value="operation">Operation</option>
                  <option value="kitchen">Kitchen</option>
                  <option value="activity-trainer">Activity Trainer</option>
                </select>
              </div>
            </>
          )}

          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {mode === 'signin' && (
            <div className="text-right">
              <button type="button" className="text-indigo-600 hover:text-indigo-700">
                Forgot Password?
              </button>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            {mode === 'signin' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="mt-6 text-center text-gray-600">
          {mode === 'signin' ? (
            <>
              Don't have an account?{' '}
              <button onClick={onSwitchMode} className="text-indigo-600 hover:text-indigo-700">
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button onClick={onSwitchMode} className="text-indigo-600 hover:text-indigo-700">
                Sign In
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}