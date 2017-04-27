/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /relationship              ->  index
 * POST    /relationship              ->  create
 * GET     /relationship/:id          ->  show
 * PUT     /relationship/:id          ->  update
 * DELETE  /relationship/:id          ->  destroy
 */

'use strict';

var connect = require('../../components/connect');

// relationship.index -> Get list of relationships.
exports.index = function(req, res) {

  var args = {
    query: "SELECT source_character_id, dest_character_id, source_type_id, dest_type_id FROM relationship",
    res: res
  };

  connect.query(args);

};

// relationship.show -> Get all relationships related to character ID.
exports.show = function(req, res) {

  var args = {
    query: "SELECT source_character_id, dest_character_id, source_type_id, dest_type_id FROM relationship WHERE character_id=" +
      req.params.character_id,
    res: res
  };

  connect.query(args);

};

// relationship.create -> Create relationship.
exports.create = function(req, res) {

  var args = {
    query: "INSERT INTO relationship (source_character_id, dest_character_id, source_type_id, dest_type_id) VALUES (" +
      req.params.source_character_id + ", " + req.params.dest_character_id +
      ", " + req.params.source_type_id + ", " + req.params.dest_type_id + ")",
    res: res
  };

  connect.query(args);

};

// relationship.update -> Update relationship.
exports.update = function(req, res) {

  var args = {
    query: "UPDATE relationship SET source_character_id=" +
      req.params.source_character_id + ", dest_character_id=" +
      req.params.dest_character_id + ", source_type_id=" +
      req.params.source_type_id + ", dest_type_id=" + req.params.dest_type_id +
      " WHERE id=" + req.params.id,
    res: res
  };

  connect.query(args);

};

// relationship.destroy -> Delete relationship.
exports.destroy = function(req, res) {

  var args = {
    query: "DELETE FROM relationship WHERE id=" + req.params.id,
    res: res
  };

  connect.query(args);

};
