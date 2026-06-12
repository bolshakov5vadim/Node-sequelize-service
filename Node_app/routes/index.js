// Подключение Router из библиотеки
var path = require("path");
var express = require("express");
var router = express.Router();



router.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});


// Экпортируем Router для всех
module.exports = router;
