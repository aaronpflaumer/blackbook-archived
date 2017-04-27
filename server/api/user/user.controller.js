/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /user              ->  index
 * POST    /user              ->  create
 * GET     /user/:id          ->  show
 * PUT     /user/:id          ->  update
 * DELETE  /user/:id          ->  destroy
 */

'use strict';

var connect = require('../../components/connect');

// user.show -> Get a user of specified ID.
exports.show = function(req, res) {

  var args = {
    query: "SELECT email, user_name FROM blackbook_user WHERE id=" +
      req.params.id,
    res: res
  };

  connect.query(args);

};

// user.create -> Create new user.
exports.create = function(req, res) {

  var args = {
    query: "INSERT INTO blackbook_user (email, password, user_name) VALUES (" +
      req.params.email + ", " + req.params.password + ", " +
      req.params.user_name + ")",
    res: res
  };

  connect.query(args);

};

// user.update -> Update user.
exports.update = function(req, res) {

  var args = {
    query: "UPDATE blackbook_user SET email=" + req.params.email +
      ", password=" + req.params.password + ", user_name=" +
      req.params.user_name + " WHERE id=" + req.params.id,
    res: res
  };

  connect.query(args);

};

// user.destroy -> Delete user.
exports.destroy = function(req, res) {

  var args = {
    query: "DELETE FROM blackbook_user WHERE id=" + req.params.id,
    res: res
  };

  connect.query(args);

};
