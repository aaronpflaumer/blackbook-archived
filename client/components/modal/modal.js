angular.module('blackbookApp').directive('modal', function() {
  return {
    restrict: 'E',
    templateUrl: 'components/modal/modal.html',
    controller: function($scope, $modal, $log) {

      $scope.modalType = 'blank';

      $scope.animationsEnabled = true;

      $scope.open = function (config) {

        console.log("Modal config:")
        console.log(config);

        $scope.modalType = config.modalType;

        if(config.bookId) {
          $scope.bookData.id = config.bookId;
        }

        if(config.bookName) {
          $scope.bookData.name = config.bookName;
        }

        if(config.characterId) {
          $scope.characterData.id = config.characterId;
        }

        if(config.characterName) {
          $scope.characterData.name = config.characterName;
        }

        var modalInstance = $modal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'myModalContent.html',
          controller: 'ModalInstanceCtrl',
          scope: $scope,
          size: config.size,
          resolve: {}
        });

      };

      $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
      };

    }
  };
}).controller('ModalInstanceCtrl', function ($scope, $modalInstance) {
  $scope.ok = function () {

    // Books Page
    if($scope.modalType === 'add-book') {
      if($scope.bookData.name) {
        $scope.addBook();
      }
    }
    else if($scope.modalType === 'edit-book') {
      $scope.editBook();
    }
    else if($scope.modalType === 'delete-book') {
      $scope.deleteBook();
    }

    // Character Page
    else if($scope.modalType === 'add-character') {
      if($scope.characterData.name) {
        $scope.addCharacter();
      }
    }
    else if($scope.modalType === 'edit-character') {
      $scope.editCharacter();
    }
    else if($scope.modalType === 'delete-character') {
      $scope.deleteCharacter();
    }

    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

});
