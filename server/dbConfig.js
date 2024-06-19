require('dotenv').config()
const mongoose = require("mongoose");

const dbConfig = async () => {
    try {

       await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("db connected successfully");

    } catch (error) {
        console.log("something went wrong with db connection", error);
        return;
    }
}


module.exports = dbConfig
