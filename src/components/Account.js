import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Account() {
  const { user, logout } = UserAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log("log out zebi")
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <h2>Account</h2>
      <p>User Email : {user && user.email} </p>

      <button onClick={handleLogout}>Log out</button>
    </div>
  )
}
