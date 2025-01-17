const express = require("express");
const router = express.Router();
const getRoute = require("./get.routes");
const postRoute = require("./post.routes");
const putRoute = require("./put.routes");
const deleteRoute = require("./delete.routes");

router.use('/get', getRoute);
router.use('/post', postRoute);
router.use('/put', putRoute);
router.use('/delete', deleteRoute);

module.exports = router;