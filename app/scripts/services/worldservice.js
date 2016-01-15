'use strict';

/**
 * @ngdoc service
 * @name paracosmApp.WorldService
 * @description
 * # WorldService
 * Service in the paracosmApp.
 */
angular.module('paracosmApp')
  .service('WorldService', function (DataService, $firebaseObject) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    
    var World = function World () {
    	return {
            name: {
                id: 'world_name',
                type: 'text',
                label: 'Name',
                required: true,
                minLength: 3,
                maxLength: 100,
                unique:true,
                value:''
            },
        	description: {
                id: 'world_description',
                type: 'textarea',
                label: 'Description',
                required: false,
                value:''
            },
            isPrivate: {
                id: 'world_isprivate',
                type: 'boolean',
                label: 'Is Private',
                value:true
            },
        	owner: {
                id: 'world_owner',
                hidden: true,
                type: 'User',
                value:undefined
            },
            canView: {
                id: 'can_view',
                hidden: true,
                multiple:true,
                type: 'User',
                value:undefined
            },
            canEdit: {
                id: 'can_edit',
                hidden: true,
                multiple:true,
                type: 'User',
                value:undefined
            }

        };
    };

    var create = function create(world) {
        console.log(world, DataService.worlds);   
        // return DataService.worlds.$add(DataService.toEntity(world))
        //     .then(function(ref) {
        //         console.log(ref);    
        //     });
    };

    var findByKey = function findByKey(key) {
        try {
            return $firebaseObject(DataService.worlds.child(key));
        } catch (ex) {
            // not sure we care about this
        }
    };



    return {
    	World: World,
        create: create,
        findByKey: findByKey
    };
  });