const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const { loadQuestions, createQuestion } = require("../controllers/post.controller");

router.use(bodyParser.json());
router.post("/load", (req, res) => { loadQuestions(req, res) });
router.post("/", (req, res) => { createQuestion(req, res) });

module.exports = router;