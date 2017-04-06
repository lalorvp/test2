'use strict';

/**
 * @ngdoc overview
 * @name comunidadFcApp
 * @description
 * # comunidadFcApp
 *
 * Main module of the application.
 */
angular
  .module('comunidadFcApp', [
    'ngAnimate',
    'ngCookies',
    'ngRoute'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/new_user', {
        templateUrl: 'views/new_user.html',
        controller: 'NewUserCtrl',
        controllerAs: 'newUser'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.hashPrefix("");  
  });
