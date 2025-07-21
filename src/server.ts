import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Подключаем CORS и парсер JSON
app.use(cors());
app.use(express.json());

// Пример простого маршрута
app.get('/', (req, res) => {
  res.send('Сервер работает ура!');
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});