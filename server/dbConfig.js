require('dotenv').config()
const mongoose = require("mongoose");

const dbConfig = async () => {
   const url = `mongodb+srv://Munu1234:UiFOtllXepY93Plu@cluster0.g2vdz2w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try {

       await mongoose.connect(url);
        console.log("db connected successfully");

    } catch (error) {
        console.log("something went wrong with db connection", error);
        return;
    }
}


module.exports = dbConfig
