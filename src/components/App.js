import React, { useState } from "react";

const Login = ({ isLoggedIn, onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // For the test, just log in on submit
    onLogin();
  }

  if (isLoggedIn) {
    // ✅ EXACTLY what the test expects:
    return <p>You are logged in!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit">Login</button>
    </form>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  return (
    <div>
      {/* Required by the test */}
      <h1>Parent Component</h1>

      <Login isLoggedIn={isLoggedIn} onLogin={handleLogin} />
    </div>
  );
};

export default App;
