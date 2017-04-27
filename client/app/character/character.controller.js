'use strict';

angular.module('blackbookApp')
  .controller('CharacterCtrl', function ($scope, data, $state, $stateParams) {

    // Empty characterData object for updating display of character.
    $scope.characterData = {};

    console.log("Character $stateParams:");
    console.log($stateParams);

    // Retrieve all info related to character.
    $scope.getCharacter = function() {

      // Make index call to character table.
      data.show('characters', $stateParams.characterId, function(result) {

        // Check if result isn't boolean (see httpRequest in data.js)
        if(typeof result !== 'boolean') {
          // Populate characters object with returned id and name data.
          $scope.character = result['0'];
        }
        else {
          // If no data returned, create empty character list object.
          $scope.character = [];
        }
        // Clean up characterData object.
        $scope.characterData = {};
      });

      data.index('character-tags', $stateParams.characterId, function(result) {

        if(typeof result !== 'boolean') {
          $scope.tags = result;
        }
        else {
          $scope.tags = [];
        }

        $scope.characterData = {};
      });

    };

    // TODO Display relationships.

    // Run getCharacter function to populate character object for display on page.
    $scope.getCharacter();

  });
