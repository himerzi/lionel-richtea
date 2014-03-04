'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    data = require('../config/usages');

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};
exports.usage = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};
exports.usages = function(req, res) {

	  return res.json(data);
//	  return res.send(err);
};