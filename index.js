require("dotenv").config();

const express = require("express");
const axios = require("axios");
const connectToDatabase = require("./config/db");
const routes = require("./routes/index");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

connectToDatabase();

app.use(cors());
app.use(express.json());
app.use("/questions", routes);
app.listen(PORT, (req, res) => {
    console.log("[STATUS] SERVER RUNNING ON PORT: " + PORT);
});

