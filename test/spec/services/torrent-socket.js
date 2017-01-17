'use strict';

describe('Service: torrentSocket', function () {

  // load the service's module
  beforeEach(module('yomanServerApp'));

  // instantiate service
  var torrentSocket;
  beforeEach(inject(function (_torrentSocket_) {
    torrentSocket = _torrentSocket_;
  }));

  it('should do something', function () {
    expect(!!torrentSocket).toBe(true);
  });

});
