const path = require('path');
const express = require('express');
const getCardBin = require('./getCardBin');


const app = express();

app.get('/', (req, res) => {
  // res.send('Hello Express app!')
  res.sendFile(path.join(__dirname + '/static/index.html'));
});

app.get('/lookup', (req, res) => {
  let bin = req.query.bin;
  getCardBin(bin)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({err});
    });
});

app.listen(3000, () => {
  console.log('server started');
});
