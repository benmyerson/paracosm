'use strict';

describe('Service: WorldService', function () {

  // load the service's module
  beforeEach(module('paracosmApp'));

  // instantiate service
  var WorldService;
  beforeEach(inject(function (_WorldService_) {
    WorldService = _WorldService_;
  }));

  it('should do something', function () {
    expect(!!WorldService).toBe(true);
  });

});
