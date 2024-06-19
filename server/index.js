require('dotenv').config()
const express = require("express");
const dbConfig = require("./dbConfig");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT;
dbConfig();
app.use(cors());

app.use(express.json());

app.post('/search', async (req, res) => {
    console.log("asila");
    console.log(req.body.search);
    try{
    const collectionName = 'products';
    const searchTerm = req.body.search;
    const ok = mongoose.connection.db.collection(collectionName);

    // Construct MongoDB Query (Customize Based on Your Data)
    const query = {
        $or: [
            { name: { $regex: searchTerm, $options: 'i' } },
            { description: { $regex: searchTerm, $options: 'i' } }
            // Add other searchable fields as needed
        ]
    };
    const results = await ok.find(query).toArray();
    res.json(results);
    }catch(error){
        consol.log(error)
    }
})
app.get('/', (req, res) => {
    res.send("server is running");
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})
