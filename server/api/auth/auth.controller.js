'use strict';

var connect = require('../../components/connect');
var moment = require('moment');
var jwt = require('jwt-simple');
var config = require('../../config/environment');

exports.authenticate = function(req, res) {

  var username = req.headers['x-username'];
  var password = req.headers['x-password'];

  if(!username || !password) {
    return res.status(401).send("Unauthorized");
  }

  //TODO Decode encrypted password.

  var authQuery = "SELECT id FROM blackbook_user WHERE email = '" + username + "' AND password = '" + password + "'";

  //Generate token with jwt.
  function genToken(userID) {
    var expires = moment().add(7, 'days').valueOf();
    var token = jwt.encode({
      iss: userID,
      exp: expires
    }, config.secret);
    return token;
  }

  var callback = function(result) {

    try {
      var userID = result[0].id
    }
    catch(e) {
      return res.status(401).send("Unauthorized");
    }

    var token = null;

    if(!userID) {
      return res.status(401).send("Unauthorized");
    }

    token = genToken(userID);
    res.set('x-api-token', token);
    res.set('x-user-id', userID);
    res.send(200);

  };

  connect.query({query: authQuery, callback: callback, res: res});

};
