const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/eventstr', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

app.set('view engine','pug');

app.get('/', (req, res) => {
  res.render('index');
});


app.listen(3000);
console.log('Eventstr server listening on port: ' + 3000);
