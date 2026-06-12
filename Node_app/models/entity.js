const sequelize = require('../config/database'); // Подключаем объект БД


const { DataTypes } = require('sequelize');


// Создать сущность
// Указать название таблицы
const Entity = sequelize.define('Entity', 
{
  name: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },
  likes: {
    type: DataTypes.INTEGER
  }
},
{
  tableName: 't1',
  timestamps: false
});

module.exports = Entity;
