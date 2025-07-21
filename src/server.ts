import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';

const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());

export const pool = mysql.createPool({
    host: 'localhost',      
    user: 'root',           
    password: 'julianMak',
    database: 'my_db_lockshop',   
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });


app.get('/', (req, res) => {
  res.send('Сервер работает ура!');
});


app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});