'use strict';

/**
 * @ngdoc function
 * @name paracosmApp.controller:WorldListCtrl
 * @description
 * # WorldListCtrl
 * Controller of the paracosmApp
 */
angular.module('paracosmApp')
  .controller('WorldListCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
