'use strict';

var mongoose = require('mongoose');

var clientSchema = mongoose.Schema({
  name: String,
  description: String,
  age: Number,
  gender: String,
  address: String,
  pets: [{type: mongoose.Schema.ObjectId, ref: 'Animal'}]
});

module.exports = mongoose.model('Client', clientSchema);
