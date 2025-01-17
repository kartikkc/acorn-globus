require("dotenv").config();
const mongoose = require("mongoose");

async function connectToDatabase() {
    const MONGODBURL = process.env.MONGODB_URL;
    try {
        await mongoose.connect(MONGODBURL);
        console.log("[DATABASE] Connection Successful");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectToDatabase;