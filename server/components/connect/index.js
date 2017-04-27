/**
 * Database calls
 */

'use strict';

module.exports['query'] = function (args) {
  var pg = require('pg');
  var config = require('../../config/environment/');

  //Connect to the database.
  pg.connect(config.psqlConnectionString, function(err, client, done) {
    if(err) {
      return console.error('Could not connect to database.', err);
    }

    //Query the database.
    client.query(args.query, function(err, result) {
      done();

      //If something went wrong...
      if(err) {
        //Callback with null if there is one.
        if(args.callback){
          args.callback(null);
          return;
        }
        //Or send the error to the client if there is not.
        args.res.status(500).send(err);
        return console.error('Error running query.', err);
      }

      //Callback the result if there is one.
      if(args.callback) {
        args.callback(result.rows);
        return;
      }
      //Or send the data to the client if there is not.
      if(result.rows.length > 0) {
        args.res.status(200).send(result.rows);
      }
      else {
        //But if the query returned no data, that isn't an error.
        args.res.status(200).end();
      }
    });
  });
};

return module.exports
