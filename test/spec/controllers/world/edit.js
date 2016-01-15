'use strict';

describe('Controller: WorldEditCtrl', function () {

  // load the controller's module
  beforeEach(module('paracosmApp'));

  var WorldEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WorldEditCtrl = $controller('WorldEditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
