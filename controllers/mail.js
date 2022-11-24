const mailbox = require("../models/mail");

const user = require("../models/user");
const { use } = require("../routes/mail");

exports.postmail = (req, res, next) => {
  const { email, content } = req.body;
  user
    .findAll({ where: { email: email } })
    .then((user) => {
      if (!user[0]) {
        return res
          .status(500)
          .json({ success: false, message: "Email does not exist" });
      } else {
        mailbox
          .create({ content: content, sentTo: user[0].id, userId: req.user.id })
          .then((response) => {
            res.status(201).json({ success: true, message: "mail sent" });
          });
      }
    })
    .catch((err) => {
      res.status(500).json({ success: false, message: err });
    });
};

exports.getMail = (req, res, next) => {
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
    .then((inbox) => {
      mailbox
        .findAll({ where: { userId: req.user.id } })
        .then((sentmails) => {
          user.findAll().then((users) => {
            res
              .status(200)
              .json({
                inbox: inbox,
                sent: sentmails,
                sentTo: users,
                success: true,
              });
          });
        })
        .catch((err) => res.status(500).json({ success: false, err: err }));
    })
    .catch((err) => {
      console.log(err);
    });
};
