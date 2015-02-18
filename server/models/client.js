'use strict';

var mongoose = require('mongoose');

var clientSchema = mongoose.Schema({
  name: String,
  description: String,
  age: Number,
  gender: String,
  address: String,
});

module.exports = mongoose.model('Client', clientSchema);
