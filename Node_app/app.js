const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
// Переменная из окружения или 3000.


// Middleware (обработка перед бизнес-логикой)
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Парсинг из URL


// Подключаем Public
app.use(express.static(path.join(__dirname,'public')));


// Подключаем Routes
const entities = require('./routes/entities');

app.use("/entities", entities);


// Обработчик ошибок при отсутствии Routes
app.use((req, res) => {
    res.status(404).send('Error 404: Routes not Found!');
});


// Глобальный обработчик ошибок
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!'
  });
});


app.listen(PORT, () => {
  console.log(`Приложение работает на порту ${PORT}`);
});
