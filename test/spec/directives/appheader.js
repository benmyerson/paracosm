'use strict';

describe('Directive: AppHeader', function () {

  // load the directive's module
  beforeEach(module('paracosmApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-app-header></-app-header>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the AppHeader directive');
  }));
});
