const express = require("express");
const router = express.Router();
const message = require("../controllers/messages");

// /api
router.get("/", (req, res) => res.send(201));

// /api/message
router.post("/message", message.createMessage);
router.get("/message", message.getAllMessages);

module.exports = router;
