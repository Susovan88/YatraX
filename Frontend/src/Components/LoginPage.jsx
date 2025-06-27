import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ loginIdentifier: '', password: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.loginIdentifier.trim()) newErrors.loginIdentifier = 'Mobile number or email is required';
    if (!form.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setSubmitted(true);
    if (Object.keys(validationErrors).length === 0) {
      // Submit logic here
      alert('Login successful!');
    }
  };

  return (
    <div className="min-h-screen bg-[#F1F1F1] flex flex-col items-center py-8 px-2 relative overflow-hidden">
      {/* Background Splash */}
      <div
        className="pointer-events-none select-none absolute z-0"
        style={{
          top: -266,
          left: -8,
          width: 609,
          height: 602,
          background:
            'radial-gradient(circle at 50% 50%, #c0ec4e 0%, rgba(216,216,216,0) 100%)',
          borderRadius: '50%',
        }}
      />
      {/* Header and Back Button container for mobile/desktop */}
      <div className="absolute left-4 top-4 z-20 flex flex-col items-start sm:static sm:flex-row sm:items-center sm:gap-3 w-auto">
        <button
          onClick={() => navigate(-1)}
          className="bg-[#907EFF] text-white rounded-lg p-2 font-semibold hover:bg-[#7a6ad6] transition flex items-center justify-center mb-2 sm:mb-0"
          aria-label="Back"
          style={{ boxShadow: '0 2px 8px #907EFF33' }}
        >
          <FaArrowLeft className="text-lg" />
        </button>
        <h1 className="text-3xl font-bold text-purple-700 drop-shadow text-left ml-0 sm:ml-2">
          YatraX
        </h1>
      </div>
      <div className="w-full max-w-md mx-auto px-4 py-8 bg-white rounded-2xl shadow-lg z-10 relative mt-6 pt-20 sm:pt-0">
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-6 border border-gray-200">
          {/* Inputs */}
          <div className="flex flex-col gap-4">
            <div>
              <input
                name="loginIdentifier"
                value={form.loginIdentifier}
                onChange={handleChange}
                placeholder="Mobile Number or Email"
                className={`w-full px-4 py-3 rounded-lg border ${errors.loginIdentifier ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:border-purple-400 text-purple-700 placeholder-purple-400 bg-white transition`}
                aria-label="Mobile Number or Email"
                autoComplete="username"
              />
              {errors.loginIdentifier && <p className="text-red-500 text-xs mt-1">{errors.loginIdentifier}</p>}
            </div>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className={`w-full px-4 py-3 rounded-lg border ${errors.password ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:border-purple-400 text-purple-700 placeholder-purple-400 bg-white transition pr-12`}
                aria-label="Password"
                autoComplete="current-password"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-400 hover:text-purple-600"
                tabIndex={-1}
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg shadow transition disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={submitted && Object.keys(errors).length > 0}
          >
            Log in
          </button>
        </form>
        <div className="text-center mt-4 text-sm text-gray-600">
          Don't have an account?{' '}
          <NavLink to="/signup" className="text-purple-700 underline font-semibold">Sign up</NavLink>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
