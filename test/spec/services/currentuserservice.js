'use strict';

describe('Service: CurrentUserService', function () {

  // load the service's module
  beforeEach(module('paracosmApp'));

  // instantiate service
  var CurrentUserService;
  beforeEach(inject(function (_CurrentUserService_) {
    CurrentUserService = _CurrentUserService_;
  }));

  it('should do something', function () {
    expect(!!CurrentUserService).toBe(true);
  });

});
