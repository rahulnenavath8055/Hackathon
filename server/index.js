const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const Registration = require('./registrationSchema');
require('dotenv').config();

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

let dataStore = [];

mongoose
    .connect(process.env.MONGO_DB_URI)
    .then(() => console.log("MONGODB CONNECTED"));

app.get('/data', async (req, res) => {
    try{const registered = await Registration.find({});
    res.status(200).json(registered);
}
    catch(err){
        res.status(500).json({Message: "Error", Error: err});
    }

    });

app.post('/data', async (req, res) => {
            const { aadhar, contact } = req.body;
            await Registration.create({
                aadhar,
                contact,
            });
            return res.json({ Message: "Data stored successfully" });
        }
);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

