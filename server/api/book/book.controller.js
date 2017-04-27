/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /book              ->  index
 * POST    /book              ->  create
 * GET     /book/:id          ->  show
 * PUT     /book/:id          ->  update
 * DELETE  /book/:id          ->  destroy
 */

'use strict';

var connect = require('../../components/connect');

// book.index -> Returns all books that belong to a user.
exports.index = function(req, res) {

  var args = {
    query: "SELECT id, name FROM book WHERE user_id=" + req.headers.id,
    res: res
  };

  connect.query(args);

};


// book.show -> Returns a specific book that belongs to a user.
// Currently not used.
exports.show = function(req, res) {

  var args = {
    query: "SELECT id, name FROM book WHERE user_id=" + req.params.id,
    res: res
  };

  connect.query(args);

};

// book.create -> Creates new book.
exports.create = function(req, res) {

  // TODO Comment code.

  var args = {
    query: "INSERT INTO book (user_id, name) VALUES (" +
      req.headers['x-user-id'] + ", '" + req.body.name + "') RETURNING id",
    res: res
  };

  connect.query(args);
};

// book.update -> Changes name of book.
exports.update = function(req, res) {

  if(req.body.name) {
    var args = {
      query: "UPDATE book SET name='" + req.body.name + "' WHERE id=" +
        req.params.id,
      res: res
    };
    connect.query(args);
  }

};

// book.destroy -> Deletes book.
exports.destroy = function(req, res) {

  var args = {
    query: "DELETE FROM book WHERE id=" + req.params.id,
    res: res
  };

  connect.query(args);

}
