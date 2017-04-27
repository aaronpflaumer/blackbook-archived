/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /character              ->  index
 * POST    /character              ->  create
 * GET     /character/:id          ->  show
 * PUT     /character/:id          ->  update
 * DELETE  /character/:id          ->  destroy
 */

'use strict';

var connect = require('../../components/connect');

// character.index -> Get list of all characters in a book.
exports.index = function(req, res) {

  var args = {
    query: "SELECT id, name FROM character WHERE book_id=" + req.headers.id,
    res: res
  };

  connect.query(args);

};

// character.show -> Get a character of specified ID.
exports.show = function(req, res) {

  var args = {
    query: "SELECT name, biography FROM character WHERE id=" +
      req.params.id,
    res: res
  };

  connect.query(args);

};

// character.create -> Get new character.
exports.create = function(req, res) {

  // TODO Comment code.

  var args = {
    query: "INSERT INTO character (book_id, name) VALUES (" +
      req.body.bookId + ", '" + req.body.name + "') RETURNING id",
    res: res
  };

  connect.query(args);

};

// character.update -> Changes name and biography of character.
exports.update = function(req, res) {

  if(req.body.name) {
    var args = {
      query: "UPDATE character SET name='" + req.body.name + "' WHERE id=" + req.params.id,
      res: res
    };
    connect.query(args);
  }
  else if(req.body.biography) {
    var args = {
      query: "UPDATE character SET biography'" + req.body.biography + "' WHERE id=" + req.params.id,
      res: res
    };
    connect.query(args);
  }

};

// character.destroy -> Deletes character.
exports.destroy = function(req, res) {

  var args = {
    query: "DELETE FROM character WHERE id=" + req.params.id,
    res: res
  };

  connect.query(args);

}
