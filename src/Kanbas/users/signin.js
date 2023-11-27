import * as client from "./client";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import signup from "./signup";
function Signin() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    if (credentials.username.length && credentials.password.length) {
      try {
        await client.signin(credentials);
        navigate("/Kanbas/Account");
      } catch (e) {
        setError(e.response.data.message)
        setTimeout(() => {
          setError('');
        }, 4000);
      }
    }
  };
  return (
    <div>
      <h1 className='h1'>Signin</h1>
      <p style={{color: 'red'}}>{error}</p>
      <label className='form-control'>
        Username
        <input 
          className="form-control" 
          value={credentials.username}
          onChange={(e) => setCredentials({...credentials, username: e.target.value})}
        />
      </label>
      <label className='form-control mb-2'>
        Password
        <input
          type='password'
          className="form-control"
          value={credentials.password} 
          onChange={(e) => setCredentials({...credentials, password: e.target.value})}
        />
      </label>
      <button className="btn btn-primary ms-2" onClick={signin}> Sign in </button>
      <Link className="btn btn-warning ms-2" to="/Kanbas/signup"> Sign up </Link>
    </div>
  );
}
export default Signin;