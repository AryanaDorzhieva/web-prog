import React, { useState } from 'react';
import './login.css';



export default function Login({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // 
    console.log("login", { email, password });
    onSuccess?.();
  }

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h3 className="app-title">Вход</h3>
      <div>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required className="add-item-input"/>
      </div>
      <div>
        <input type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} required className="add-item-input"/>
      </div>
      <button type="submit" className="alogin-button">Войти</button>
    </form>
  );
}