const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173'
}));

// Подключение к БД
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "my_db"
});

db.connect((err) => {
  if (err) {
    console.error('Ошибка подключения к my_db:', err);
    return;
  }
  console.log('Подключение к my_db успешно!');
});

// POST /login - обработка входа пользователя
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  const sql = "SELECT * FROM users WHERE name = ? AND password = ?";
  db.query(sql, [username, password], (err, data) => {
    if (err) {
      console.error('Ошибка входа:', err);
      return res.status(500).json({ message: "Ошибка входа" });
    }
    
    if (data.length > 0) {
      return res.json({ message: `С возвращением, ${username}!` });
    } else {
      return res.status(401).json({ message: "Пользователь не найден" });
    }
  });
});

// POST /register - регистрация нового пользователя
app.post('/register', (req, res) => {
  const { email, username, password } = req.body;
  
  const checkSql = "SELECT * FROM users WHERE name = ?";
  db.query(checkSql, [username], (err, checkData) => {
    if (err) {
      console.error('Ошибка проверки:', err);
      return res.status(500).json({ message: "Ошибка в базе данных" });
    }
    
    if (checkData.length > 0) {
      return res.status(400).json({ message: "Пользователь уже существует" });
    }
    
    const insertSql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    db.query(insertSql, [username, email, password], (err, result) => {
      if (err) {
        console.error('Ошибка вставки:', err);
        return res.status(500).json({ message: "Не удалось выполнить регистрацию" });
      }
      
      console.log(`Новый пользователь: ${username}`);
      res.json({ message: "Регистрация прошла успешно!" });
    });
  });
});

// Получение списка пользователей
app.get('/users', (req, res) => {
  const sql = "SELECT name, email, password FROM users";
  
  db.query(sql, (err, data) => {
    if (err) {
      console.error('Ошибка получения пользователей:', err);
      return res.status(500).json([]);
    }
    
    res.json(data);
  });
});

// Запуск сервера
app.listen(8081, () => {
  console.log('Сервер запущен на порту 8081');
});