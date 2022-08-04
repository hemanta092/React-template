import React, { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChage = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = () => {
    alert(email+password);
    setEmail('');
    setPassword('')
  };

  return (
    <form className="container">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          onChange={handleEmailChage}
          aria-describedby="emailHelp"
          placeholder="Enter email"
          value={email}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          onChange={handlePasswordChange}
          placeholder="Password"
          value={password}
        />
      </div>
      <button
        type="submit"
        onClick={handleFormSubmit}
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
}
