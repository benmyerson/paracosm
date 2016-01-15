'use strict';

describe('Controller: WorldViewCtrl', function () {

  // load the controller's module
  beforeEach(module('paracosmApp'));

  var WorldViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WorldViewCtrl = $controller('WorldViewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
