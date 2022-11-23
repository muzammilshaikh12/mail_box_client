const mailbox = require('../models/mail')

const user = require('../models/user')

exports.postmail = (req,res,next) => {
    const {email,content} = req.body 
   user.findAll({where:{email:email}})
   .then(user=> {
    if(!user[0]) {
        return res.status(500).json({success:false,message:'Email does not exist'})
    } else {
        mailbox.create({content:content, sentTo:user[0].id, userId:req.user.id})
        .then(response=>{
            res.status(201).json({success:true,message:'mail sent'})
        })
    }
   })
   .catch(err=>{
    res.status(500).json({success:false,message:err})
   })
}