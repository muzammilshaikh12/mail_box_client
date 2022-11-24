const jwt = require('jsonwebtoken')
const User = require('../models/user')

exports.authenticator = (req,res,next)=> {
    try{
const token = req.header('Authorization')
if(!token) {
    return res.status(400).json({message:'Parameters missing!!!'})
} 
const user = jwt.verify(token,'secretkey')
console.log('hey hey hey hey hey ', user.userId)
User.findByPk(user.userId)
.then(user=>{
    req.user = user
    
    next()
})
    }
    catch(err){
console.log(err)
return res.json({err,success:false})
    }
}