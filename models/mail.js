const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const inbox = sequelize.define('inbox', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
    content : {
        type: Sequelize.STRING
    },
    subject:{
      type:Sequelize.STRING
    },
    read: {
        type:Sequelize.BOOLEAN
    },
    sentTo: {
      type: Sequelize.INTEGER
    }
  })

module.exports = inbox