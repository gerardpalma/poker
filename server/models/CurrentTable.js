const config = require('../config');
const mongoose = require('mongoose');

const CurrentTableSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  tableNumber: {
    type: Number,
    type: String,
    required: true,
    unique: true,
  },
  seatNumber: {
    type: Number,
    type: String,
    required: true,
    unique: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model('currentTable', CurrentTableSchema);
