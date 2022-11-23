const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const mailbox = sequelize.define('mailbox', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
    content : {
        type: Sequelize.STRING
    },
    sentTo : {
        type: Sequelize.INTEGER
    }
})

module.exports = mailbox