import React, { useState } from 'react';
import './register.css'

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='box'>
      <h2>Регистрация</h2>
      <input className='reg-input'
        type="text"
        placeholder="Имя"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input className='reg-input'
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input className='reg-input'
        type={showPassword ? "text" : "password"}
        placeholder="Пароль"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />
        Показать пароль
      </label>
      <button className='reg-button'>Зарегистрироваться</button>
    </div>
  );
}
