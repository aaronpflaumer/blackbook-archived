'use strict';

angular.module('blackbookApp')
  .controller('AuthCtrl', function ($scope, data, session, $state) {

    $scope.credentials = {
      username: null,
      password: null
    };

    $scope.login = function() {
        if($scope.credentials.username && $scope.credentials.password) {
          data.auth($scope.credentials.username, $scope.credentials.password, function(result) {
            if (result) {
              $state.go('user', {userId: session.getUserID()});
            }
          });
        }
    };

  });
