'use strict';

/**
 * @ngdoc service
 * @name paracosmApp.DataService
 * @description
 * # DataService
 * Service in the paracosmApp.
 */
angular.module('paracosmApp')
  .service('DataService', function (Ref) {
    // AngularJS will instantiate a singleton by calling "new" on this function
   
    return {
    	sluggify: function(text) {
    		return text.toString().toLowerCase()
			    .replace(/\s+/g, '-')           // Replace spaces with -
			    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
			    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
			    .replace(/^-+/, '')             // Trim - from start of text
			    .replace(/-+$/, '');            // Trim - from end of text
			}, 
      toEntity: function toEntity(obj) {
        var returnVal = {};
        Object.keys(obj).forEach(function(key) {
            if (obj[key].value !== undefined) {
              returnVal[key] = obj[key].sluggify ? this.sluggify(obj[key].value) : obj[key].value;
            }
        }); 
        return returnVal;
      },
    	worlds: Ref.child('worlds'),
    	users:  Ref.child('users')
    };
  });
