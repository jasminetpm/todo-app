import React, { useState, useContext } from "react";
import loginRequest from "../api/loginRequest";
import { useNavigate } from 'react-router-dom';
import { TokenContext } from "../App";

export const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [token, setToken] = useContext(TokenContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        loginRequest(username, password)
            .then(({ token }) => {
                setToken(token);
                navigate('/');
            }).catch(err => {
                setError(err.message);
            });
    }

    return (
        <div>
            <h1>Login</h1>
            <div style={{ color: 'red' }}>{error}</div>
            <form onSubmit={handleLogin}>
                
                <h3>Username</h3>
                <input className="add-todo-input"
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />

                <h3>Password</h3>
                <input className="add-todo-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button className="button">Login</button>
            </form>
        </div>
    );
};