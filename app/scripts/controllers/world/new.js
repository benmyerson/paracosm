'use strict';

/**
 * @ngdoc function
 * @name paracosmApp.controller:WorldNewCtrl
 * @description
 * # WorldNewCtrl
 * Controller of the paracosmApp
 */
angular.module('paracosmApp')
  .controller('WorldNewCtrl', function ($scope, WorldService, user, $location) {
  	var nw = new WorldService.World();
  	nw.owner.value = user.uid;

  	$scope.vm = {
  		newWorld: nw,
  		save: function(w) {
  			var createdWorld = WorldService.create(w);
        console.log("set", createdWorld);
  		},
  		checkForExisting: function(name) {
  			return WorldService.findByKey(name);
  		}
  	};

  	$scope.$watch('vm.newWorld.name', function(oldVal, newVal) {
  		$scope.vm.nameTaken = !!WorldService.findByKey(newVal);
  	});
  });
