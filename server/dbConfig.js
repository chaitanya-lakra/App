require('dotenv').config()
const mongoose = require("mongoose");

const dbConfig = async () => {
    const MONGO_URI="mongodb+srv://Munu1234:UiFOtllXepY93Plu@cluster0.g2vdz2w.mongodb.net/test";
    try {

       await mongoose.connect(MONGO_URI, {
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
