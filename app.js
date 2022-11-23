const express = require('express')

const bodyParser = require('body-parser');

const app = express()

const cors =  require('cors')

app.use(cors())

app.use(bodyParser.json());

const sequelize = require('./util/database');

// Models
const User = require('./models/user')

const Mail = require('./models/mail')


// Routes
const userRoute = require('./routes/user')

const mailRoute = require('./routes/mail')

app.use(userRoute)
app.use(mailRoute)

// Association
User.hasMany(Mail)
Mail.belongsTo(User)


sequelize.sync()
.then(response=>{
    app.listen(4000)
})
.catch(err=>{
    console.log(err)
})