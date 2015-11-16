'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var WhatsitSchema = new Schema({
  user: String,
  name: String,
  labels: [String],
  data: []
});

module.exports = mongoose.model('Whatsit', WhatsitSchema);