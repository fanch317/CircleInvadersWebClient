(function() {
  'use strict';

  angular.module('game')
  .service('WebSocket', function($log) {

    var socketIo = null;
    var setupDone = false;

    if(!setupDone) {
      socketIo = io.connect('http://localhost:3000/client');
      setupDone = true;
    }

    socketIo.on('message', function(message) {
        $log.debug('Receive message');
        $log.debug(message);
    });

    //Send a message to lobby
    this.emitAction = function(key, value) {
      var action = {};
      action[key] = value;
      socketIo.emit('message', action);
    };

  });

})();
