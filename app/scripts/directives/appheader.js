'use strict';

/**
 * @ngdoc directive
 * @name paracosmApp.directive:AppHeader
 * @description
 * # AppHeader
 */
angular.module('paracosmApp')
  .directive('appHeader', function (CurrentUserService, Auth) {
    return {
      templateUrl: 'views/directives/appheader.html',
      restrict: 'A',
      controllerAs: 'vm',
      controller: function () {
      	var vm = this;

        function update(){
          vm.user = CurrentUserService.getCurrentUser();
          vm.name = CurrentUserService.getName();
        }

        Auth.$onAuth(update);

      	return vm;
      }
    };
  });