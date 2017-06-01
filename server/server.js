const path = require('path');
const express = require('express');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');
var app = express();

app.use('/', express.static(publicPath));

app.get('/', (req, res) => {
  res.render('index.html');
});

app.listen(port, () => { console.log(`Server connected at port ${port}`)});
