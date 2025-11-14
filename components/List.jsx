import React from "react";
import './List.css';

export default function List({ items, onRemove }) {
  if (!items || items.length === 0) return <div className="empty-list-message">Список пуст.</div>;

  return (
    <ul className="item-list">
      {items.map((item) => (
        <li key={item.id} className="list-item">
          {item.text}{" "}
          <button
            onClick={() => onRemove(item.id)}
            aria-label={`Удалить ${item.text}`}
            className="remove-item-button"
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}