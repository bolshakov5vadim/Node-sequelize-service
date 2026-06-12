// Подключение Router из библиотеки
var express = require("express");
var router = express.Router();


// Подключение сущности
const Entity = require('../models/entity');


// GET-рут сервиса
router.get('/', async (req, res) => {
    try {
        const entities = await Entity.findAll();
        res.json(entities);
    }
    catch (error) {
        res.json({ message: 'Ошибка чтения' });
    }
});
// async необходимо указывать при работе с Entity


// POST-рут сервиса
router.post('/', async (req, res, next) => {
    try {
        const { entity } = req.body;
        await Entity.create({ entity });
        res.json({ message: 'Сущность создана'});
    }
    catch (error) {
        res.json({ message: 'Ошибка добавления сущности' });
    }
});


// DELETE-рут сервиса
router.delete('/', async (req, res, next) => {
    const transaction = await sequelize.transaction();
    try {
        await User.destroy({ where: { id: 10 }}, { transaction });
        await transaction.commit();
        res.json({ message: 'Сущность удалена' });
    }
    catch (error) {
        await transaction.rollback();
        res.json({ message: 'Ошибка удаления' });
    }
});


// Экпортируем Router для всех
module.exports = router;
