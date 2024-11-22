// LoginSignUp.jsx

import React, { useState } from 'react';

const LoginSignUp = ({ isSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de soumission
  };

  return (
    <div className="form">
      <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn">
          {isSignup ? 'Create Account' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default LoginSignUp;
