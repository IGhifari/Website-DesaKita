import { useState } from 'react';
import { FaCrown, FaUser, FaKey } from 'react-icons/fa';
import LogoDesa from '../assets/logo.png'
function LoginUser() {
  const [role, setRole] = useState('kepala-desa');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <div className="text-center mb-6">
          <img src={LogoDesa} alt="DesaKita" className="mx-auto h-20 mb-2" />
          <h1 className="text-xl font-bold text-gray-800">
            Halo👋🏻, Selamat Datang!
          </h1>
          <p className="text-sm text-gray-500">Silahkan masuk untuk melanjutkan</p>
        </div>

        {/* Role Selection */}
        <div className="flex justify-between mb-4 border rounded-full overflow-hidden">
          <button
            className={`flex-1 py-2 text-sm font-medium ${
              role === 'kepala-desa'
                ? 'bg-green-100 text-green-700'
                : 'bg-white text-gray-500'
            }`}
            onClick={() => setRole('kepala-desa')}
          >
            <div className="flex items-center justify-center gap-1">
              <FaCrown className="text-sm" /> Kepala Desa
            </div>
          </button>
          <button
            className={`flex-1 py-2 text-sm font-medium ${
              role === 'kepala-rumah'
                ? 'bg-green-100 text-green-700'
                : 'bg-white text-gray-500'
            }`}
            onClick={() => setRole('kepala-rumah')}
          >
            <div className="flex items-center justify-center gap-1">
              <FaUser className="text-sm" /> Kepala Rumah
            </div>
          </button>
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="text-sm text-gray-600">Email Address</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaUser />
            </span>
            <input
              type="email"
              className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@app.com"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="text-sm text-gray-600">Password</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaKey />
            </span>
            <input
              type="password"
              className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition duration-300"
          onClick={() => console.log({ email, password, role })}
        >
          Masuk
        </button>
      </div>
    </div>
  );
}

export default LoginUser;
