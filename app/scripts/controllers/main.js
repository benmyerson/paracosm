'use strict';

/**
 * @ngdoc function
 * @name paracosmApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the paracosmApp
 */
angular.module('paracosmApp')
  .controller('MainCtrl', function ($scope, CurrentUserService) {
  	$scope.user = CurrentUserService.getCurrentUser();
  	
  	$scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
