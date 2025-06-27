import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    username: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    agree: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Full name is required';
    if (!form.username.trim()) newErrors.username = 'Username is required';
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = 'Valid email required';
    if (!form.mobile.trim() || !/^\d{10}$/.test(form.mobile)) newErrors.mobile = 'Valid 10-digit mobile number required';
    if (!form.password || form.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (!form.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    if (form.password && form.confirmPassword && form.password !== form.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!form.agree) newErrors.agree = 'You must agree to the privacy policy';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setSubmitted(true);
    if (Object.keys(validationErrors).length === 0) {
      // Submit logic here
      alert('Sign up successful!');
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
            <motion.div whileFocus={{ scale: 1.04, boxShadow: '0 0 0 2px #c0ec4e' }} whileHover={{ scale: 1.02 }}>
              <motion.input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:border-purple-400 text-purple-700 placeholder-purple-400 bg-white transition`}
                aria-label="Full Name"
                autoComplete="name"
                as={motion.input}
                whileFocus={{ scale: 1.04, boxShadow: '0 0 0 2px #c0ec4e' }}
                whileHover={{ scale: 1.02 }}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </motion.div>
            <motion.div whileFocus={{ scale: 1.04, boxShadow: '0 0 0 2px #c0ec4e' }} whileHover={{ scale: 1.02 }}>
              <motion.input
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Username"
                className={`w-full px-4 py-3 rounded-lg border ${errors.username ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:border-purple-400 text-purple-700 placeholder-purple-400 bg-white transition`}
                aria-label="Username"
                autoComplete="username"
                as={motion.input}
                whileFocus={{ scale: 1.04, boxShadow: '0 0 0 2px #c0ec4e' }}
                whileHover={{ scale: 1.02 }}
              />
              {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
            </motion.div>
            <motion.div whileFocus={{ scale: 1.04, boxShadow: '0 0 0 2px #c0ec4e' }} whileHover={{ scale: 1.02 }}>
              <motion.input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:border-purple-400 text-purple-700 placeholder-purple-400 bg-white transition`}
                aria-label="Email"
                autoComplete="email"
                as={motion.input}
                whileFocus={{ scale: 1.04, boxShadow: '0 0 0 2px #c0ec4e' }}
                whileHover={{ scale: 1.02 }}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </motion.div>
            <motion.div whileFocus={{ scale: 1.04, boxShadow: '0 0 0 2px #c0ec4e' }} whileHover={{ scale: 1.02 }}>
              <motion.input
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                className={`w-full px-4 py-3 rounded-lg border ${errors.mobile ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:border-purple-400 text-purple-700 placeholder-purple-400 bg-white transition`}
                aria-label="Mobile Number"
                autoComplete="tel"
                maxLength={10}
                as={motion.input}
                whileFocus={{ scale: 1.04, boxShadow: '0 0 0 2px #c0ec4e' }}
                whileHover={{ scale: 1.02 }}
              />
              {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
            </motion.div>
            <motion.div className="relative" whileFocus={{ scale: 1.04, boxShadow: '0 0 0 2px #c0ec4e' }} whileHover={{ scale: 1.02 }}>
              <motion.input
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={form.password}
                onChange={handleChange}
                placeholder="Password (min 8 characters)"
                className={`w-full px-4 py-3 rounded-lg border ${errors.password ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:border-purple-400 text-purple-700 placeholder-purple-400 bg-white transition pr-12`}
                aria-label="Password"
                autoComplete="new-password"
                as={motion.input}
                whileFocus={{ scale: 1.04, boxShadow: '0 0 0 2px #c0ec4e' }}
                whileHover={{ scale: 1.02 }}
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
            </motion.div>
            <motion.div className="relative" whileFocus={{ scale: 1.04, boxShadow: '0 0 0 2px #c0ec4e' }} whileHover={{ scale: 1.02 }}>
              <motion.input
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className={`w-full px-4 py-3 rounded-lg border ${errors.confirmPassword ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:border-purple-400 text-purple-700 placeholder-purple-400 bg-white transition pr-12`}
                aria-label="Confirm Password"
                autoComplete="new-password"
                as={motion.input}
                whileFocus={{ scale: 1.04, boxShadow: '0 0 0 2px #c0ec4e' }}
                whileHover={{ scale: 1.02 }}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-400 hover:text-purple-600"
                tabIndex={-1}
                onClick={() => setShowConfirmPassword((v) => !v)}
                aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
            </motion.div>
          </div>
          {/* Checkbox */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className={`accent-purple-500 w-5 h-5 rounded border-gray-300 focus:ring-2 focus:ring-purple-400 transition ${errors.agree ? 'border-red-400' : ''}`}
              id="agree"
            />
            <label htmlFor="agree" className="text-xs text-gray-600 select-none">
              I have read and agree to the <a href="/privacy-policy" className="text-purple-700 underline">privacy policy and terms</a>.
            </label>
          </div>
          {errors.agree && <p className="text-red-500 text-xs -mt-4 mb-2">{errors.agree}</p>}
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg shadow transition disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={submitted && Object.keys(errors).length > 0}
          >
            Sign up
          </button>
          {/* Divider */}
          <div className="flex items-center gap-2 my-2">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-gray-400 text-sm">Or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
          {/* Social Buttons */}
          <div className="flex flex-col gap-3">
            <button type="button" className="flex items-center justify-center gap-2 w-full py-3 border-2 border-purple-300 rounded-lg bg-white hover:bg-purple-50 transition">
              <img src="/public/GoogleIcon.png" alt="Google" className="w-6 h-6" />
              <span className="text-gray-700 font-medium">Continue with Google</span>
            </button>
            <button type="button" className="flex items-center justify-center gap-2 w-full py-3 border-2 border-purple-300 rounded-lg bg-white hover:bg-purple-50 transition">
              <img src="/public/Phone.svg" alt="Phone" className="w-6 h-6" />
              <span className="text-gray-700 font-medium">Continue with mobile number</span>
            </button>
          </div>
        </form>
        <div className="text-center mt-4 text-sm text-gray-600">
          Have an account?{' '}
          <NavLink to="/login" className="text-purple-700 underline font-semibold">Log in</NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;