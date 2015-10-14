'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var WhatsitSchema = new Schema({
  name: String,
  labels: [String],
  data: []
});

module.exports = mongoose.model('Whatsit', WhatsitSchema);