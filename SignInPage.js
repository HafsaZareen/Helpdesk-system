import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, useHistory, Routes } from 'react-router-dom';
import './SignInPage.css';

const HelpdeskSystem = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log('Sign in:', username, password);
    setUsername('');
    setPassword('');
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log('Forgot password:', forgotPasswordEmail);
    setForgotPasswordEmail('');
  };

  return (
    <div className='helpdesk-container'>
      <h2>Helpdesk System</h2>

      {/* Sign-in form */}
      <form onSubmit={handleSignIn}>
        <h3>Sign In</h3>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>

      {/* Forgot password form */}
      <form onSubmit={handleForgotPassword}>
        <h3>Forgot Password</h3>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

const SignInPage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HelpdeskSystem />} />
        {/* Add more routes for signup, forgot password, etc. */}
      </Routes>
    </Router>
  );
};

export default SignInPage;
