'use strict';

var _ = require('lodash');
var Whatsit = require('./whatsit.model');

// Get list of whatsits
exports.index = function(req, res) {
  Whatsit.find(function (err, whatsits) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(whatsits);
  });
};

// Get a single whatsit
exports.show = function(req, res) {
  Whatsit.findById(req.params.id, function (err, whatsit) {
    if(err) { return handleError(res, err); }
    if(!whatsit) { return res.status(404).send('Not Found'); }
    return res.json(whatsit);
  });
};

// Creates a new whatsit in the DB.
exports.create = function(req, res) {
  Whatsit.create(req.body, function(err, whatsit) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(whatsit);
  });
};

// Updates an existing whatsit in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Whatsit.findById(req.params.id, function (err, whatsit) {
    if (err) { return handleError(res, err); }
    if(!whatsit) { return res.status(404).send('Not Found'); }
    var updated = _.extend(whatsit, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(whatsit);
    });
  });
};

// Deletes a whatsit from the DB.
exports.destroy = function(req, res) {
  Whatsit.findById(req.params.id, function (err, whatsit) {
    if(err) { return handleError(res, err); }
    if(!whatsit) { return res.status(404).send('Not Found'); }
    whatsit.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
