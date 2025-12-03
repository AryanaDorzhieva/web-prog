import React from "react";
import { useNavigate } from "react-router-dom";
import './Conditional.css';


export default function Conditional() {

  const navigate = useNavigate();
  return (
    <div className="conditional">
      <h2 className="app-title">Вход в систему</h2>
      <button onClick={() => navigate("/auth")} className="alogin-button">ВОЙТИ</button>
      <div className="conditional-message logged-out">
      Пожалуйста, войдите в систему.
      </div>
    </div>
    
  );

}