// Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const isAuthenticated = !!localStorage.getItem('token');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/auth/authenticate', { email, password }); // Updated API link
      const token = response.data.token;
      localStorage.setItem('token', token);
      console.log('Login successful!');
      // Redirect to dashboard or other protected routes upon successful login
      // For example, you can use "react-router-dom" to navigate to the dashboard route.
      window.location.reload();
    } catch (error) {
      console.error('Login failed:', error);
      setErrorMessage('Incorrect credentials'); // Set the error message
    }
  };

  if (isAuthenticated) {
    return <p>You are already logged in!</p>;
  }

  return (
    <div>
      <h2>Login</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Display the error message */}
      <form onSubmit={handleLogin}>
        <input
          type="email" 
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Login;
