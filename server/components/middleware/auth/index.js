module.exports['verifyToken'] = function (req, res, next) {
  var jwt = require('jwt-simple');
  var moment = require('moment');
  var config = require('../../../config/environment');
  var connect = require('../../connect');
  var apiToken = null;
  var newToken = null;
  var userID = null;

  try {
    apiToken = req.headers['x-api-token'];
    var decoded = jwt.decode(apiToken, config.secret);

    if (decoded.exp <= Date.now()) {
      res.status(400).send('Access token has expired');
    }

    var authQuery = "SELECT id FROM blackbook_user WHERE id = " + decoded.iss;

    var callback = function(result) {
      userID = result[0].id;
      if(userID === decoded.iss) {
        var newToken = jwt.encode({
          iss: userID,
          exp: moment().add(7, 'days').valueOf()
        }, config.secret);
        res.set('x-api-token', newToken);
        res.set('x-user-id', userID);
        next();
      }
      else {
        console.error('Token contains invalid user.');
        res.status(500).send('Token contains invalid user.');
      }
    };

    connect.query({query: authQuery, callback: callback, req: req, res: res});

  }
  catch(e) {
    console.error(e);
    res.status(500).send('API Token Error');
  }

}
