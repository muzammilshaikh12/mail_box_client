const express = require('express')

const bodyParser = require('body-parser');

const app = express()

const cors =  require('cors')

app.use(cors())

app.use(bodyParser.json());

const sequelize = require('./util/database');

// Models
const User = require('./models/user')

const Inbox = require('./models/mail')

const Sentmail = require('./models/sentmail')


// Routes
const userRoute = require('./routes/user')

const mailRoute = require('./routes/mail')

app.use(userRoute)
app.use(mailRoute)

// Association
User.hasMany(Inbox)
Inbox.belongsTo(User)

User.hasMany(Sentmail)
Sentmail.belongsTo(User)

sequelize.sync()
.then(response=>{
    app.listen(4000)
})
.catch(err=>{
    console.log(err)
})