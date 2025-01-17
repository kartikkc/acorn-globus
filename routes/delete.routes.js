const express = require("express");
const bodyParser = require("body-parser");
const { deleteQuestion } = require("../controllers/delete.controller");

const router = express.Router();

router.use(bodyParser.json());

router.delete("/:id", (req, res) => { deleteQuestion(req, res) });

module.exports = router;