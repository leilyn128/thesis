import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the values
    console.log('Email:', email);
    console.log('Password:', password);
    // Here you can add your login logic, e.g., API call
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: 4 }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: 8, boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: 4 }}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: 8, boxSizing: 'border-box' }}
          />
        </div>

        <button type="submit" style={{ padding: '8px 16px' }}>
          Login
        </button>
      </form>
    </div>
  );
}
