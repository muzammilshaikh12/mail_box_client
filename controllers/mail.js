const mailbox = require("../models/mail");

const user = require("../models/user");

const sentmail = require("../models/sentmail");

exports.postmail = (req, res, next) => {
  const { email, content, subject } = req.body;
  user
    .findAll({ where: { email: email } })
    .then((user) => {
      if (!user) {
        return res
          .status(500)
          .status({ success: false, message: "email does not exist" });
      } else {
        sentmail
          .create({
            content: content,
            read: false,
            sentBy: req.user.id,
            subject: subject,
            userId: user[0].id,
          })
          .then((response) => {
            mailbox.create({
              content: content,
              userId: req.user.id,
              subject: subject,
              sentTo: user[0].id,
              read: false,
            });
          });
      }
    })
    .catch((err) => {
      res.status(500).json({ err: err, message: "Something went wrong" });
    });
};

exports.getMails = (req, res, next) => {
  mailbox
    .findAll({
      where: { sentTo: req.user.id },
      include: [
        {
          model: user,
          require: false,
        },
      ],
    })
    .then((mails) => {
      sentmail
        .findAll({
          where: { sentBy: req.user.id },
          include: [
            {
              model: user,
              require: false,
            },
          ],
        })
        .then((sentmails) => {
          res
            .status(200)
            .json({ success: true, inbox: mails, sent: sentmails });
        });
    })
    .catch((err) => {
      res.status(500).json({ success: false, message: err });
    });
};

exports.updateInbox = (req, res, next) => {
  const id = req.params.id;
  mailbox.findAll({ where: { id: id } }).then((mail) => {
    if (mail[0].read === true) {
      res.status(200).json({ success: true });
    } else {
      mailbox
        .update({ read: true }, { where: { id: id } })
        .then((response) => {
          res.status(200).json({ success: true });
        })
        .catch((err) => {
          res.status(500).json({ success: false });
        });
    }
  })
  .catch(err=>{
    res.status(500).json({ success: false });
  })
};

exports.deleteInbox = (req,res,next) => {
  const id=req.params.id
  console.log(id)
  mailbox.destroy({where:{id:id}})
  .then(response=>{
    res.status(200).json({success:true})
  })
  .catch(err=>{
    res.status(500).json({success:false})
  })
}

exports.deleteSentmail = (req,res,next) => {
  const id=req.params.id
  sentmail.destroy({where:{id:id}})
  .then(response=>{
    res.status(200).json({success:true})
  })
  .catch(err=>{
    res.status(500).json({success:false})
  })
}
