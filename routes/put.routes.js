const express = require("express");
const bodyParser = require("body-parser");
const { putQuestions } = require("../controllers/put.controller");

const router = express.Router();

router.use(bodyParser.json());

router.put("/:id", (req, res) => { putQuestions(req, res) });

module.exports = router;