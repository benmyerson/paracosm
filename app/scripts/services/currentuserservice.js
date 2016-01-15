'use strict';

/**
 * @ngdoc service
 * @name paracosmApp.CurrentUserService
 * @description
 * # CurrentUserService
 * Service in the paracosmApp.
 */
angular.module('paracosmApp')
  .service('CurrentUserService', function (Auth, Ref, $firebaseObject) {
    // AngularJS will instantiate a singleton by calling 'new' on this function
    var service = {};
    var cachedUser;
    service.getCurrentUser = function getCurrentUser() {
        
    	cachedUser = {
    		auth: Auth.$getAuth(),
            profile: {
                name: ''
            }
    	};
    	
    	if (cachedUser.auth && cachedUser.auth.uid) {
    		cachedUser.profile = $firebaseObject(Ref.child('users/'+cachedUser.auth.uid));
    	}
    	
    	return cachedUser;
    };

    service.getName = function () {
        var user = cachedUser || service.getCurrentUser();
    
        if (user.profile && user.profile.name) {
            return user.profile.name;
        } else {

            if (user.auth.provider === 'password') {
                return user.auth.password.email;
            } else if (user.auth.provider === 'google') {
                return user.auth.google.displayName;
            }
        }
        

    };

    return service;
  });
