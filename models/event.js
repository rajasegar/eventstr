const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = new Schema({
  title: String,
  startDate: Date,
  endDate: Date,
  location: String,
  agenda: String,
  address: String,
  createdAt: Date,
  updatedAt: Date
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
