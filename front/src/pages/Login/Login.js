import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [registerData, setRegisterData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.username);
      setUser(data.username);
      navigate("/");
    } else {
      alert(data.message || "Login failed");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerData),
    });
    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.username);
      setUser(data.username);
      navigate("/");
    } else {
      alert(data.message || data.error);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h4>Login</h4>
        <label>username:</label>
        <input
          className="inp"
          value={loginData.username}
          onChange={(e) =>
            setLoginData({ ...loginData, username: e.target.value })
          }
        />
        <label>password:</label>
        <input
          type="password"
          className="inp"
          value={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />
        <input type="submit" value="Login" className="btn" />
      </form>

      <form className="login-form" onSubmit={handleRegister}>
        <h4>Create Account</h4>
        <label>username:</label>
        <input
          className="inp"
          value={registerData.username}
          onChange={(e) =>
            setRegisterData({ ...registerData, username: e.target.value })
          }
        />
        <label>password:</label>
        <input
          type="password"
          className="inp"
          value={registerData.password}
          onChange={(e) =>
            setRegisterData({ ...registerData, password: e.target.value })
          }
        />
        <input type="submit" value="Create Account" className="btn" />
      </form>
    </div>
  );
};

export default Login;
