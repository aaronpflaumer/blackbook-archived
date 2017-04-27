var plan = require('flightplan');

var appName = 'blackbook';
var username = 'developer';

var tmpDir = appName+'-' + new Date().getTime();

plan.target('production', [
  {
    host: '104.236.133.213',
    port: '48624',
    username: 'developer',
    privateKey: "/Users/aaron/.ssh/bb_id_rsa",
    agent: process.env.SSH_AUTH_SOCK
  }
]);

plan.local(function(local) {
  local.log('Copy files to remote hosts');
  local.exec('npm install && bower install && grunt build');
  var filesToCopy = local.exec('find dist -type f -print0', {silent: true});
  local.transfer(filesToCopy, '/tmp/' + tmpDir);
});

plan.remote(function(remote) {
  remote.log('Copy from /tmp to /home...');
  remote.sudo('cp -R /tmp/' + tmpDir + ' ~', {user: username});
  remote.rm('-rf /tmp/' + tmpDir);

  remote.sudo('cp -R ~/' + tmpDir + '/dist/* ~/' + tmpDir, {user: username});
  remote.rm('-rf ~/' + tmpDir + '/dist');

  remote.log('Link to app name...');
  remote.sudo('ln -snf ~/' + tmpDir + ' ~/'+ appName, {user: username});

  remote.log('Install production dependencies...');
  remote.sudo('cd ' + appName + '/server && npm install --production --prefix ~/' + appName + '/server', {user: username});
  remote.exec('sudo service blackbook restart');

  remote.log('DONE!');
});
