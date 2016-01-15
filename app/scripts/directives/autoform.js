'use strict';

/**
 * @ngdoc directive
 * @name paracosmApp.directive:autoform
 * @description
 * # autoform
 */
angular.module('paracosmApp')
  .directive('autoform', function () {
    return {
      templateUrl: 'views/directives/autoform.html',
      restrict: 'AE',
      scope: {
      	formObject: '=',
        action: '&',
        actionLabel: '@'
      },
      link: function postLink(scope, element, attrs) {
      	var fields = {};
      	if (scope && element && attrs) {
	      	angular.forEach(scope.formObject, function(field, key) {
	      		if (!field.hideFromAutoform) {
              fields[key] = field;
        		}
	      	});
      	}

      	scope.fields = fields;
      }
    };
  });