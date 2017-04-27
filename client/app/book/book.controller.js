'use strict';

angular.module('blackbookApp')
  .controller('BookCtrl', function ($scope, data, $state, $stateParams) {

    // Empty characterData object for updating display of character list.
    $scope.characterData = {};

    console.log("Book $stateParams:");
    console.log($stateParams);

    // Retrieve index of character table.
    $scope.getCharacters = function() {

      // Make index call to character table.
      data.index('characters', $stateParams.bookId, function(result) {
        // Check if result isn't boolean (see httpRequest in data.js)
        if(typeof result !== 'boolean') {
          // Populate characters object with returned id and name data.
          $scope.characters = result;
        }
        else {
          // If no data returned, create empty character list object.
          $scope.characters = [];
        }
        // Clean up characterData object.
        $scope.characterData = {};
      });

      
    };

    // Create new item in character table.
    $scope.addCharacter = function() {

      // Store bookId in characterData to be sent to character table.
      $scope.characterData.bookId = $stateParams.bookId;

      // Make create call to character table with new character name.
      data.create('characters', $scope.characterData, function(result) {
        // Check if non-error result.
        if(result) {
          // Check if characters object is in scope.
          if($scope.characters) {
            // Push returned ID of new character (from result object)
            // and name of character (from characterData object) into characters object.
            $scope.characters.push({id:result[0].id, name:$scope.characterData.name});
          }
          else {
            // If no characters object, create and add id and name of new character.
            $scope.characters = [{id:result[0].id, name:$scope.characterData.name}];
          }
        }
        // Clean up characterData object.
        $scope.characterData = {};
      });
    };

    $scope.editCharacter = function() {

      // Create route variable character will be posted to.
      var route = 'characters/' + $scope.characterData.id;

      // Make update call to character table with id of character and new name.
      data.update(route, $scope.characterData, function(result) {
        // Check if non-error result.
        if(result) {
          // Refresh characters object with new character name.
          // Check each item in characters object.
          $.each($scope.characters, function(index, val) {
            // Find matching id of updated character.
            if(val.id === $scope.characterData.id) {
              // Change name of updated character.
              val.name = $scope.characterData.name;
            }
          });
        }
        // Clean up characterData object.
        $scope.characterData = {};
      });
    };

    $scope.deleteCharacter = function() {

      // Make delete call to character table with id of character.
      data.delete('characters', $scope.characterData, function(result) {
        // Check if non-error result.
        if(result) {
          // Create temporary array for character storage.
          var tempArray = [];
          // Remove deleted character from characters object.
          // Check each item in characters object.
          $.each($scope.characters, function(index, val) {
            // Check if id matches that of deleted character.
            if(val.id !== $scope.characterData.id) {
              // Push non-deleted characters into array.
              tempArray.push(val);
            }
          });
          // Replace characters object with items from tempArray.
          $scope.characters = tempArray;
        }
        // Clean up characterData object.
        $scope.characterData = {};
      });
    };

    $scope.viewCharacter = function(id) {
      $state.go('character', {userId: $stateParams.userId, bookId: $stateParams.bookId, characterId: id})
    };

    // Run getCharacters function to populate characters object for display on page.
    $scope.getCharacters();

  });
