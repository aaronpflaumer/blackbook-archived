'use strict';

angular.module('blackbookApp').factory('data', function ($http, session, alert, $state) {

    // Empty data object.
    var data = {};

    // Object for storing information to be sent to back end for database queries.
    var httpRequest = function(req, model, route, callback) {
      $http(req).success(function(data, status, headers) {
          session.setToken(headers('x-api-token'));
          session.setUserID(headers('x-user-id'));
          success(model, route, status);
          // Return data if data received.
          if(data) {
            callback(data);
          }
          // Return true if no data received.
          else {
            callback(true);
          }
        // Return false if error received.
        }).error(function(error, status) {
          failure(model, route, status, error);
          callback(false);
        });
    };

    // Authenticate route: Login with username and password.
    data.auth = function(username, password, callback) {

      // Req object with necessary information for login.
      // POST on authenticate route with username and password.
      var req = {
         method: 'POST',
         url: '/api/authenticate/',
         headers: {
           'x-username': username,
           'x-password': password
         },
         data: {}
       };

       // Run httpRequest function with collected data.
       httpRequest(req, 'authenticate', 'create', callback);

    };

    // Index route.
    data.index = function(route, id, callback) {

      // Req object with necessary information for index call.
      var req = {
         method: 'GET',
         url: '/api/' + route,
         headers: {
           'x-api-token': session.getToken(),
           'id': id
         },
         data: {}
       };

       console.log("req");
       console.log(req);

       // Run httpRequest function with collected data.
       httpRequest(req, route, 'index', callback);

    };

    // Show route.
    data.show = function(route, id, callback) {

      // Req object with necessary information for show call.
      var req = {
         method: 'GET',
         url: '/api/' + route + '/' + id,
         headers: {
           'x-api-token': session.getToken()
         },
         data: {}
       };

       // Run httpRequest function with collected data.
       httpRequest(req, route, 'show', callback);

    };


    // Create route.
    data.create = function(route, data, callback) {

      var req = {
         method: 'POST',
         url: '/api/' + route,
         headers: {
           'x-api-token': session.getToken(),
           'x-user-id': session.getUserID()
         },
         data: data
       };

       // Run httpRequest function with collected data.
       httpRequest(req, route, 'create', callback);

    };

    // Update route. (Edit)
    data.update = function(route, data, callback) {

      var req = {
        method: 'PUT',
        url: '/api/' + route,
        headers: {
          'x-api-token': session.getToken(),
          'x-user-id': session.getUserID()
        },
        data: data
      };

      // Run httpRequest function with collected data.
      httpRequest(req, route, 'update', callback);

    };

    // Delete route.
    data.delete = function(route, data, callback) {

      var req = {
        method: 'DELETE',
        url: '/api/' + route + '/' + data.id,
        headers: {
          'x-api-token': session.getToken(),
          'x-user-id': session.getUserID()
        },
        data: data
      };

      // Run httpRequest function with collected data.
      httpRequest(req, route, 'delete', callback);

    };

    var success = function(model, route, status) {
      alert.success(model + '.' + route);
      console.log(model + '.' + route + ' succeeded with status ' + status);
    };

    var failure = function(model, route, status, error) {
      alert.error(model + '.' + route);
      console.log(model + '.' + route + ' failed with status ' + status);
      console.log(error);
    };

    return data;

  });
