const Sequelize = require('sequelize');

const sequelize = new Sequelize('email_client', 'root', 'Muzammil@123', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;