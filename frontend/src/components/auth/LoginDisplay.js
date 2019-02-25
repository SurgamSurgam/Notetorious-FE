import React from "react";
import { withRouter } from "react-router";

const LoginDisplay = ({
  username,
  password,
  isLoggedIn,
  loginUser,
  handleChange,
  demoLogin
}) => {
  return (
    <React.Fragment>
      <h1>Login Page</h1>
      <form onSubmit={loginUser}>
        <input
          type="text"
          value={username}
          name="username"
          placeholder="username"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          value={password}
          name="password"
          placeholder="password"
          onChange={handleChange}
          required
        />
        <button type="submit">Sign in</button>
        <button className='demoButton' onClick={demoLogin}>Demo log in</button>
      </form>

      <p>{isLoggedIn ? "Logged In!" : ""}</p>
    </React.Fragment>
  );
};

export default withRouter(LoginDisplay);