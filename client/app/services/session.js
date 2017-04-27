'use strict';

angular.module('blackbookApp').factory('session', function (localStorageService) {

    var session = {};

    var token = null;
    var userID = null;

    session.getToken = function () {
        //TODO Ensure it is a token or null.
        //If getToken returns null. Redirect to login.

        if(token) {
          return token;
        }
        else if (localStorageService.get('token')) {
          restoreFromLocalStorage();
          return token;
        }

        return null;
    };

    session.getUserID = function () {
        //TODO Ensure it is a userID or null.
        //If getUserID returns null. Redirect to login.

        if(userID) {
          return userID;
        }
        else if (localStorageService.get('userID')) {
          restoreFromLocalStorage();
          return userID;
        }

        return null;
    };

    session.setToken = function (t) {
        //TODO Ensure it is a token.
        token = t;
        saveToLocalStorage();
    };

    session.setUserID = function (u) {
        //TODO Ensure it is an id.
        userID = u;
        saveToLocalStorage();
    };

    session.destroy = function() {
        token = null;
        userID = null;
        localStorageService.clearAll();
    };

    session.exists = function() {
      if (session.getToken() === null) {
        return false;
      }
      return true;
    };

    function restoreFromLocalStorage () {
        if (localStorageService.get('token')) {
          token = localStorageService.get('token');
        }
        if (localStorageService.get('userID')) {
          userID = localStorageService.get('userID');
        }
    }

    function saveToLocalStorage () {
        localStorageService.set('token', token);
        localStorageService.set('userID', userID);
    }

    return session;

  });
