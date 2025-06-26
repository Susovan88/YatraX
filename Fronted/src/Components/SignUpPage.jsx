import React, { useState } from 'react';

const SignUpPage = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '', agree: false });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.username.trim()) newErrors.username = 'Username is required';
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = 'Valid email required';
    if (!form.password || form.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
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
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-white">
      {/* Background Splash - improved color */}
      <div className="absolute top-0 left-0 w-full h-1/3 z-0" style={{minHeight:'180px', background: 'radial-gradient(circle at 50% 50%, #c0ec4e 0%, rgba(216,216,216,0) 100%)'}}></div>
      <div className="relative z-10 w-full max-w-md mx-auto px-4 py-8">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center font-sans tracking-tight">YatraX</h1>
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-6 border border-gray-200">
          {/* Inputs */}
          <div className="flex flex-col gap-4">
            <div>
              <input
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Username"
                className={`w-full px-4 py-3 rounded-lg border ${errors.username ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:border-purple-400 text-purple-700 placeholder-purple-400 bg-white transition`}
                aria-label="Username"
                autoComplete="username"
              />
              {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
            </div>
            <div>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:border-purple-400 text-purple-700 placeholder-purple-400 bg-white transition`}
                aria-label="Email"
                autoComplete="email"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password (min 8 characters)"
                className={`w-full px-4 py-3 rounded-lg border ${errors.password ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:border-purple-400 text-purple-700 placeholder-purple-400 bg-white transition`}
                aria-label="Password"
                autoComplete="new-password"
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>
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
      </div>
    </div>
  );
};

export default SignUpPage;