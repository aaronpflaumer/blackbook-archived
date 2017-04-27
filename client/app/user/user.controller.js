'use strict';

angular.module('blackbookApp')
  .controller('UserCtrl', function ($scope, data, $state, $stateParams) {

    // Empty bookData object for updating display of book list.
    $scope.bookData = {};

    // Retrieve index of book table.
    $scope.getBooks = function() {

      // Make show call to book table with user ID.
      data.index('books', $stateParams.userId, function(result) {
        // Check if result isn't boolean (see httpRequest in data.js)
        if(typeof result !== 'boolean') {
          // Populate books object with returned id and name data.
          $scope.books = result;
        }
        else {
          // If no data returned, create empty book list object.
          $scope.books = [];
        }
        // Clean up bookData object.
        $scope.bookData = {};
      });
    };

    // Create new item in book table.
    $scope.addBook = function() {

      // Make create call to book table with new book name.
      data.create('books', $scope.bookData, function(result) {
        // Check if non-error result.
        if(result) {
          // Check if books object is in scope.
          if($scope.books) {
            // Push returned ID of new book (from result object)
            // and name of book (from bookData object) into books object.
            $scope.books.push({id:result[0].id, name:$scope.bookData.name});
          }
          else {
            // If no books object, create and add id and name of new book.
            $scope.books = [{id:result[0].id, name:$scope.bookData.name}];
          }
        }
        // Clean up bookData object.
        $scope.bookData = {};
      });
    };

    // Edit name of book in book table.
    $scope.editBook = function() {

      // Create route variable character will be posted to.
      var route = 'books/' + $scope.bookData.id;

      // Make update call to books table with id of book and new name.
      data.update(route, $scope.bookData, function(result) {
        // Check if non-error result.
        if(result) {
          // Refresh books object with new book name.
          // Check each item in books object.
          $.each($scope.books, function(index, val) {
            // Find matching id of updated book.
            if(val.id === $scope.bookData.id) {
              // Change name of updated book.
              val.name = $scope.bookData.name;
            }
          });
        }
        // Clean up bookData object.
        $scope.bookData = {};
      });
    };

    // Delete book from book table.
    $scope.deleteBook = function() {

      // Make delete call to book table with id of book.
      data.delete('books', $scope.bookData, function(result) {
        // Check if non-error result.
        if(result) {
          // Create temporary array for book storage.
          var tempArray = [];
          // Remove deleted book from books object.
          // Check each item in books object.
          $.each($scope.books, function(index, val) {
            // Check if id matches that of deleted book.
            if(val.id !== $scope.bookData.id) {
              // Push non-deleted books into array.
              tempArray.push(val);
            }
          });
          // Replace books object with items from tempArray.
          $scope.books = tempArray;
        }
        // Clean up bookData object.
        $scope.bookData = {};
      });
    };

    $scope.viewBook = function(id) {
      $state.go('book', {userId: $stateParams.userId, bookId: id})
    };

    // Run getBooks function to populate books object for display on page.
    $scope.getBooks();

  });
