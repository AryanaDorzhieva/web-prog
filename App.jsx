import React, { useState } from "react";
import Conditional from "./components/Conditional";
import List from "./components/List";
import './App.css';


function AddItem({ onAdd }) {
  const [value, setValue] = useState("");
  const submit = () => {
    const text = value.trim();
    if (!text) return;
    onAdd({ id: Date.now(), text });
    setValue("");
  };

  return (
    <div className="add-item-form">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Новый элемент"
        className="add-item-input"
      />
      <button onClick={submit} className="add-item-button">Добавить</button>
    </div>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [items, setItems] = useState([
    { id: 1, text: "Пушкин" },
    { id: 2, text: "Достоевский" },
    { id: 3, text: "Лермонтов" },
  ]);

  const toggleLogin = () => setIsLoggedIn((s) => !s);
  const addItem = (item) => setItems((prev) => [...prev, item]);
  const removeItem = (id) => setItems((prev) => prev.filter((it) => it.id !== id));

  return (
    <div className="app-container">
      <h1 className="app-title">Условный рендеринг</h1>

      <button onClick={toggleLogin} className="toggle-login-button">
        {isLoggedIn ? "Выйти" : "Войти"}
      </button>
      <Conditional isLoggedIn={isLoggedIn} userName="Иван" />

      <hr className="app-divider" />

      <h2 className="app-subtitle">Список</h2>
      <List items={items} onRemove={removeItem} />
      <AddItem onAdd={addItem} />
    </div>
  );
}

