import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import './AuthPage.css';

export default function AuthPage() {
  const [mode, setMode] = useState("login");
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <div >
        <button className="btn" onClick={() => setMode("login")} disabled={mode === "login" }>Войти</button> 
        <button className="btn" onClick={() => setMode("register")} disabled={mode === "register"} >Регистрация</button>
        <button className="btn" onClick={() => navigate("/")} >Назад к списку</button>
      </div>

      {mode === "login" ? <Login onSuccess={() => navigate("/")} /> : <Register onSuccess={() => navigate("/")} />}
    </div>
  );
}