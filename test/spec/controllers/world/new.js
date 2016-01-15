'use strict';

describe('Controller: WorldNewCtrl', function () {

  // load the controller's module
  beforeEach(module('paracosmApp'));

  var WorldNewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WorldNewCtrl = $controller('WorldNewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
