const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/eventstr', { useNewUrlParser: true, useUnifiedTopology: true });

const Event = require('./models/event');

const app = express();

app.set('view engine','pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', async (req, res) => {
  const events = await Event.find({});

  res.render('index', { events });
});

app.post('/events/new', async (req, res) => {
  console.log(req.body);
  const newEvent = new Event(req.body);
  const _doc = await newEvent.save();
  res.redirect('/');
});


app.listen(3000);
console.log('Eventstr server listening on port: ' + 3000);
