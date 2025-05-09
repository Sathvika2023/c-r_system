import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FacultyLogin = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        setError('');
        navigate('/faculty');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-24 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Faculty Login</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-semibold" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
          value={form.email}
          onChange={handleChange}
          required
        />
        <label className="block mb-2 font-semibold" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
          value={form.password}
          onChange={handleChange}
          required
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default FacultyLogin;
