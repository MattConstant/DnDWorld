// Login.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PlayerList from "../player/PlayerList";
import Player from "../player/Player";
import AddPlayer from "../player/AddPlayer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState(""); // Add state for username
  const isAuthenticated = !!localStorage.getItem("token");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/auth/authenticate",
        { email, password }
      ); // Updated API link
      const token = response.data.token;
      localStorage.setItem("token", token);
      console.log("Login successful!");
      // Split the token into its three parts: header, payload, and signature
      const tokenParts = token.split(".");
      const encodedPayload = tokenParts[1];

      // Decode the Base64 encoded payload
      const decodedPayload = atob(encodedPayload);

      // Parse the JSON payload to access the username property
      const payloadObj = JSON.parse(decodedPayload);
      const username = payloadObj.sub; // Replace 'username' with the actual property name in your JWT payload
      setUsername(username); // Set the username in state
      console.log("Username:", username);
      console.log("Payload:", payloadObj);
      console.log(decodedPayload);
      // Redirect to dashboard or other protected routes upon successful login
      // For example, you can use "react-router-dom" to navigate to the dashboard route.
      // window.location.reload();
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage("Incorrect credentials"); // Set the error message
    }
  };

  if (isAuthenticated) {
    return (
      <div>
        <p>You are logged in as {username}!</p>
        <AddPlayer username={username}/>
      </div>
    );
  }

  return (
    <div>
      <h2>Login</h2>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}{" "}
      {/* Display the error message */}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
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
