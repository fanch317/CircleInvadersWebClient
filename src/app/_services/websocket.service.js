(function() {
  'use strict';

  angular.module('game')
  .service('WebSocket', function($log, $rootScope, UserDatas) {

    var socketIo = null;
    var setupDone = false;

    if(!setupDone) {
      socketIo = io.connect('http://localhost:3000/client');
      setupDone = true;
    }

    socketIo.on('message', function(message) {
        $log.debug('Receive message');
        $log.debug(message);

        if(angular.isObject(message) && message.connect !== undefined )
        {
          $log.debug('Connect from a new client '+message.connect);
          UserDatas.addWebClient(message.connect);
        }
        if(angular.isObject(message) && message.disconnect !== undefined )
        {
          $log.debug('Disconnect from a new client '+message.disconnect);
          UserDatas.removeWebClient(message.disconnect);
        }

    });

    //Send a message to lobby
    this.emitAction = function(key, value) {
      var action = {};
      action[key] = value;
      socketIo.emit('message', action);
    };

  });

})();
