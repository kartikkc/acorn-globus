// /get route with queries
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const { getQuestionID, getQuestionsWithFilerting } = require("../controllers/get.controller");


router.use(bodyParser.json());


router.get("/", (req, res) => { getQuestionsWithFilerting(req, res) });
router.get("/:id", (req, res) => { getQuestionID(req, res) });


module.exports = router;