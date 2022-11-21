const express = require('express')

const bodyParser = require('body-parser');

const app = express()

const cors =  require('cors')

app.use(cors())

app.use(bodyParser.json());

const sequelize = require('./util/database');

// Models
const User = require('./models/user')


// Routes
const userRoute = require('./routes/user')

app.use(userRoute)


// Association




sequelize.sync()
.then(response=>{
    app.listen(4000)
})
.catch(err=>{
    console.log(err)
})