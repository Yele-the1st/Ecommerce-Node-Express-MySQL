const Sequelize = require('sequelize');

const sequelize = new Sequelize('batum-fragrance', 'root', 'knowledge',{
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;