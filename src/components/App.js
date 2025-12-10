import React, { useState } from "react";

const Login = ({ isLoggedIn, onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (username.trim() !== "" && password.trim() !== "") {
      onLogin();
    } else {
      alert("Please enter username and password");
    }
  }

  if (isLoggedIn) {
    return <h2>You are logged in</h2>;
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
      {/* ✅ Parent Heading */}
      <h1>Login Page</h1>

      {/* Child Component */}
      <Login isLoggedIn={isLoggedIn} onLogin={handleLogin} />
    </div>
  );
};

export default App;
