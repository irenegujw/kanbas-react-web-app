import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/kanbas/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="ms-2">
      <h1>Signup</h1>
      {error && <div>{error}</div>}

      <label className='form-control mb-2'>
        Username
        <input className='form-control'
          value={credentials.username}
          onChange={(e) => setCredentials({
            ...credentials,
          username: e.target.value })} 
        />
      </label>


      <label className='form-control mb-2'>
        Password
        <input className='form-control mb-2'
          value={credentials.password}
          onChange={(e) => setCredentials({
            ...credentials,
          password: e.target.value })} 
        />
      </label>

      <button className='btn btn-danger mb-2' onClick={signup}>
        Signup
      </button>
    </div>
  );
}
export default Signup;

