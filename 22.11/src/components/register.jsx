import React, { useState } from 'react';
import './register.css'

export default function Register({ onSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("register", { name, email, password });
    onSuccess?.();
  }

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <h3 className="app-title">Регистрация</h3>
      <div>
        <input 
        placeholder="Имя" 
        value={name} 
        onChange={e => setName(e.target.value)} required 
        className="add-item-input"/>
      </div>
      <div>
        <input 
        placeholder="Email" 
        value={email} 
        onChange={e => setEmail(e.target.value)} required 
        className="add-item-input"/>
      </div>
      <div>
        <input type={show ? "text" : "password"} 
        placeholder="Пароль" 
        value={password} 
        onChange={e => setPassword(e.target.value)} required 
        className="add-item-input"/>
        <button type="button" 
        onClick={() => setShow(s => !s)}
        className="qlogin-button">{show ? "Скрыть" : "Показать"}</button>
      </div>
      <button type="submit" className="alogin-button">Зарегистрироваться</button>
    </form>
  );
}