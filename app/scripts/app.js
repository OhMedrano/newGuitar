'use strict';

/**
 * @ngdoc overview
 * @name newGuitarApp
 * @description
 * # newGuitarApp
 *
 * Main module of the application.
 */
angular
  .module('newGuitarApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/frets.html',
        controller: 'FretsCtrl'
      })
      .when('/frets', {
        templateUrl: 'views/frets.html',
        controller: 'FretsCtrl'
      })
      .when('/harm', {
        templateUrl: 'views/harm.html',
        controller: 'HarmCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
