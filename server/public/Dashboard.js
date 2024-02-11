const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the "public" directory
app.use(express.static('public'));

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'path/to/Dashboard.html'));
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});