/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /tag              ->  index
 * POST    /tag              ->  create
 * GET     /tag/:id          ->  show
 * PUT     /tag/:id          ->  update
 * DELETE  /tag/:id          ->  destroy
 */

'use strict';

var connect = require('../../components/connect');

// tag.index -> Get list of suggested tags.
exports.index = function(req, res) {

  var args = {
    query: "SELECT name FROM tag WHERE suggested=TRUE",
    res: res
  };

  connect.query(args);

};

// tag.create ->
exports.create = function(req, res) {

  var args = {
    query: "INSERT INTO tag (name, suggested) VALUES (" + req.params.name +
      ", " + req.params.suggested + ")",
    res: res
  };

  connect.query(args);

};


// tag.update ->
exports.update = function(req, res) {

  var args = {
    query: "UPDATE tag SET name=" + req.params.name + " WHERE id=" +
    req.params.id,
    res: res
  };

  connect.query(args);

};


// tag.destroy -> Delete tag.
exports.destroy = function(req, res) {

  var args = {
    query: "DELETE FROM tag WHERE id=" + req.params.id,
    res: res
  };

  connect.query(args);

};
