'use strict';

angular.module('yomanServerApp')
  .factory('torrentSocket', function (socketFactory) {
    return socketFactory();
  });
