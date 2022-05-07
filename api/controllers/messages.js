const { Messages } = require("../models");

exports.createMessage = async (req, res) => {
  const result = await Messages.create({
    name: req.body.name,
    message: req.body.message,
  });

  return res.json(result);
};

exports.getAllMessages = async (req, res) => {
  const result = await Messages.findAll();
  return res.json(result);
};
