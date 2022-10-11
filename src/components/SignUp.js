import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { UserAuth } from '../context/AuthContext';


export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { createUser } = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await createUser(email, password);
            navigate('/account');
        } catch (e) {
            setError(e.message);
            console.log(e.message);
        }
    };

  return (
    <div>
        <div>
            <h2>Sign Up</h2>
            <p>Already have an account ? <Link to='/'>Sign In.</Link> </p>
        </div>
        <form onSubmit={handleSubmit} >
            <div>
                <label>Email Address </label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" />
            </div>

            <div>
                <label>Password </label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" />
            </div>

            <button>Sign Up</button>
        </form>
    </div>
  )
}
