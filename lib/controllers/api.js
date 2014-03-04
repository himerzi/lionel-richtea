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
	var post_data = req.body;
	data.push(post_data);
	return res.json(data);

};


exports.usagePostcode = function(req, res) {
    var postcode = req.param("postcode");
    data.filter(function(val, index, obj){
      console.log(val.postcode, postcode);
      if (String(val.postcode) == postcode){
          return res.json(val);
      }
    });
    return res.json(404);
};

exports.usages = function(req, res) {

	  return res.json(data);
	  //return res.json(data);
//	  return res.send(err);
};