'use strict';

/**
 * @ngdoc function
 * @name comunidadFcApp.controller:NewUserCtrl
 * @description
 * # NewUserCtrl
 * Controller of the comunidadFcApp
 */
angular.module('comunidadFcApp')
  .controller('NewUserCtrl', function ($scope) {

  	$scope.onSubmit = function(){
  		if ($scope.newUserForm.$valid) {
  			console.log('paso validacion' + $scope.usuario.user);
  		}else{
  			console.log('no paso validacion');	
  		}		
  		
  	}

  });
