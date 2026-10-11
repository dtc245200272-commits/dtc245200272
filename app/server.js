const express = require('express');
const mysql = require('mysql2');
const app = express();

const connection = mysql.createConnection({
  host: 'db', 
  user: 'root',
  password: process.env.DB_PASSWORD || 'MatKhauManh@123!',
  database: 'forum_db'
});

connection.connect((err) => {
  if (err) console.error('Lỗi kết nối DB:', err);
  else console.log('Kết nối MySQL thành công!');
});

app.get('/', (req, res) => {
  res.send('<h1>Chào mừng đến với Diễn đàn!</h1><p>Ứng dụng Node.js đã kết nối Database qua Nginx.</p>');
});

app.listen(3000, () => {
  console.log('App đang chạy ở port 3000');
});