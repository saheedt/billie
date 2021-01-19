const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname), { maxAge: "30d" }));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(9000, () => console.log('Application running on port 9000'));