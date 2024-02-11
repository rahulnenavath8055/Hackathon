import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

let dataStore = [];

app.post('/data', (req, res) => {
    dataStore.push(req.body);
    res.status(200).send('Data received');
});

app.get('/data', (req, res) => {
    res.status(200).json(dataStore);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));