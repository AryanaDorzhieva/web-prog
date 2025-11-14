import React from "react";
import './Conditional.css';


export default function Conditional({ isLoggedIn, userName }) {
  if (isLoggedIn) {
    return (
      <div className="conditional-message logged-in">
        Привет, <span className="user-name">{userName}</span>! Вы вошли.
      </div>
    );
  }
  return (
    <div className="conditional-message logged-out">
      Пожалуйста, войдите в систему.
    </div>
  );
}