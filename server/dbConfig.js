require('dotenv').config()
const mongoose = require("mongoose");

const dbConfig = async () => {
//     try {

//        await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         })
//         console.log("db connected successfully");

//     } catch (error) {
//         console.log("something went wrong with db connection", error);
//         return;
//     }
// }
 const url = `mongodb+srv://Munu1234:UiFOtllXepY93Plu@cluster0.g2vdz2w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try{
        await mongoose.connect(url);
        console.log("database connected")

    }
    catch(error){
        console.log(`error while connection to database` , error.message)
    }


module.exports = dbConfig
