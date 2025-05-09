import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // ✅ Import navigate

export default function Login() {
    const [form, setForm] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();  // ✅ initialize navigate

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
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
                navigate('/welcome');  // ✅ redirect to welcome page
            } else {
                setMessage('Invalid credentials');
            }
        } catch (err) {
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input name="email" placeholder="Email" value={form.email} onChange={handleChange} /><br />
                <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} /><br />
                <button type="submit">Login</button>
            </form>
            <p>{message}</p>
        </div>
    );
}
