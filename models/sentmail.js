const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const sentmail = sequelize.define('sentmail', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
    content : {
        type: Sequelize.STRING
    },
    sentBy: {
      type: Sequelize.INTEGER
    },
    subject:{
      type:Sequelize.STRING
    },
  })

module.exports = sentmail