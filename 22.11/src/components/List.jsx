import React, {useState} from "react";
import './List.css';

export default function List() {
  const [items, setItems] = useState([
    { id: 1, name: "Достоевский" },
    { id: 2, name: "Лермонтов" },
    { id: 2, name: "Пушкин" }
  ]);
  const [newName, setNewName] = useState("");

  function addItem() {
    if (!newName.trim()) return;
    setItems(prev => [...prev, { id: Date.now(), name: newName }]);
    setNewName("");
  }

  function remove(id) {
    setItems(prev => prev.filter(x => x.id !== id));
  }

  return (
    <div className="list">
      <hr className="app-divider" />
      <h3 className="app-title">Список</h3>
      <div className="item-list">
        {items.map(it => (
          <div key={it.id} className="list-item">
            <span>{it.name}</span>
            <button onClick={() => remove(it.id)} className="remove-item-button">Удалить</button>
          </div>
        ))}
      </div>

      <div className="add-item-form">
        <input 
        value={newName} 
        onChange={e => setNewName(e.target.value)} 
        placeholder="Новый элемент" 
        className="add-item-input"/>
        <button onClick={addItem} className="add-item-button">ДОБАВИТЬ</button>
      </div>
    </div>
  );
}