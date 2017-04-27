angular.module('blackbookApp').directive('navbar', function() {
  return {
    restrict: 'E',
    templateUrl: 'components/navbar/navbar.html',
    controller: function($scope, session, $state, alert) {
      $scope.logout = function() {
          session.destroy();
          alert.success("Logout successful.");
          $state.go('auth');
      }
    }
  };
});
