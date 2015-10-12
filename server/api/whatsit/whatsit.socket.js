/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Whatsit = require('./whatsit.model');

exports.register = function(socket) {
  Whatsit.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Whatsit.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('whatsit:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('whatsit:remove', doc);
}