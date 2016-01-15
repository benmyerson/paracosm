'use strict';

/**
 * @ngdoc function
 * @name paracosmApp.controller:WorldViewCtrl
 * @description
 * # WorldViewCtrl
 * Controller of the paracosmApp
 */
angular.module('paracosmApp')
  .controller('WorldViewCtrl', function ($scope, world, user) {
    $scope.world = world;
  });
