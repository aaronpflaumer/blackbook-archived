'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

  // Server port
  port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            8080,

  psqlConnectionString: "postgres://developer:" + process.env.PSQL_PASS + "@localhost/blackbook",

  secret: process.env.JWT_SECRET,

};
