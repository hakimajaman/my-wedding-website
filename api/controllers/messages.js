const { Messages } = require("../models");
const Pagination = require("../utils/pagination");

exports.createMessage = async (req, res) => {
  const result = await Messages.create({
    name: req.body.name,
    message: req.body.message,
  });

  return res.json(result);
};

exports.getAllMessages = async (req, res) => {
  const messages = await Messages.findAll();
  const result = await Pagination(messages, req.params.page, req.params.get);
  return res.json(result);
};
