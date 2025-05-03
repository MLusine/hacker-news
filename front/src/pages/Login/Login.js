import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h4>Login</h4>
        <div>
          <label>username:</label>
          <input className="inp" />
        </div>
        <div>
          <label>password:</label>
          <input type="password" className="inp" />
        </div>

        <input type="submit" value="Login" className="btn"/>
        <a href="">Forgot your password?</a>
      </form>
      <form className="login-form">
        <h4>Create Account</h4>
        <div>
          <label>username:</label>
          <input className="inp" />
        </div>
        <div>
          <label>password:</label>
          <input type="password" className="inp" />
        </div>

        <input type="submit" value="Create Account" className="btn" />
      </form>
    </div>
  );
};

export default Login;
