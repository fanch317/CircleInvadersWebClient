(function() {
  'use strict';

  angular.module('game')
  .service('WebSocket', function($log, $websocket) {
    // Open a WebSocket connection

    var dataStream = null;
    var socketIo = null;
    var setupDone = false;

    if(!setupDone) {
      dataStream = $websocket.$new('ws://localhost:3000/game');
      socketIo = io.connect('http://localhost:3000/game');
    }

    this.emitAction = function(key, value) {
      dataStream.$emit(key, value);
      socketIo.emit('message', { key: value });
      $log.debug(socketIo);
    };



  });


})();
