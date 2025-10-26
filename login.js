import React, { useState } from 'react';
import './login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='box'>

      <h2 className='vhod'>Вход</h2>

      <input className='login-input1'
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <input className='login-input2'
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button className='login-button'>Войти</button>

    </div>
  );
}
