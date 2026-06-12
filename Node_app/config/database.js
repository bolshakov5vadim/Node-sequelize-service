const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'mydb',
  'user1',
  'pswd',
  {
    dialect: 'postgres',
    host: '192.178.56.1',
    port: 5432,
    logging: false
  }
);


// Опционально: проверка подключения
sequelize.authenticate().then(() => {
  console.log('Connection established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});


// Экспортируем для всех
module.exports = sequelize;
