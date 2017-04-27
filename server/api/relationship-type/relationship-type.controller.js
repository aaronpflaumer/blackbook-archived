/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /relationship-type              ->  index
 * POST    /relationship-type              ->  create
 * GET     /relationship-type/:id          ->  show
 * PUT     /relationship-type/:id          ->  update
 * DELETE  /relationship-type/:id          ->  destroy
 */

'use strict';

var connect = require('../../components/connect');

// relationship-type -> Get list of suggested relationship-types.
exports.index = function(req, res) {

  var args = {
    query: "SELECT name FROM relationship_type WHERE suggested=TRUE",
    res: res
  };

  connect.query(args);

};

// relationship-type.create -> Create new relationship type.
exports.create = function(req, res) {

  var args = {
    query: "INSERT INTO relationship_type (name, suggested) VALUES (" +
      req.params.name + ", " + req.params.suggested + ")",
    res: res
  };

  connect.query(args);

};

// relationship-type.update -> Update relationship type.
exports.update = function(req, res) {

  var args = {
    query: "UPDATE relationship_type SET name=" + req.params.name +
      " WHERE id=" + req.params.id,
    res: res
  };

  connect.query(args);

};

// relationship-type.destroy -> Delete relationship type.
exports.destroy = function(req, res) {

  var args = {
    query: "DELETE FROM relationship_type WHERE id=" + req.params.id,
    res: res
  };

  connect.query(args);

};
