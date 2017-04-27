'use strict';

angular.module('blackbookApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'LocalStorageModule'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, localStorageServiceProvider) {
    $stateProvider
      .state('auth', {
        url: '/',
        templateUrl: 'app/auth/auth.html',
        controller: 'AuthCtrl'
      })
      .state('user', {
        url: '/user/{userId}/',
        templateUrl: 'app/user/user.html',
        controller: 'UserCtrl'
      })
      .state('book', {
        url: '/user/{userId}/book/{bookId}/',
        templateUrl: 'app/book/book.html',
        controller: 'BookCtrl'
      })
      .state('character', {
        url: '/user/{userId}/book/{bookId}/character/{characterId}/',
        templateUrl: 'app/character/character.html',
        controller: 'CharacterCtrl'
      });

    localStorageServiceProvider.setPrefix('blackbookApp');

    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  })

  .controller('mainCtrl', function($rootScope, session, $state) {
    $rootScope.$on('$stateChangeStart',
      function(event, toState, toParams, fromState, fromParams){
        if(!session.exists() && (toState.name !== 'auth')) {
          $state.go('auth');
        }
      });
  });
