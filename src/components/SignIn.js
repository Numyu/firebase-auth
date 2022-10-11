import {React, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'



export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {user, signIn} = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signIn(email, password);
      navigate('/account');
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  if (!user) {
    return (
      <div>
          <div>
              <h2>Sign In</h2>
              <p>Don't have an account ? <Link to='/signup'>Sign Up.</Link> </p>
          </div>
          <form onSubmit={handleSubmit}>
              <div>
                  <label>Email Address </label>
                  <input onChange={(e) => setEmail(e.target.value)} type="email" />
              </div>
  
              <div>
                  <label>Password </label>
                  <input onChange={(e) => setPassword(e.target.value)} type="password" />
              </div>
  
              <button>Sign In</button>
          </form>
      </div>
    )
  } else {
    navigate('/account');
  }

  

  
}
