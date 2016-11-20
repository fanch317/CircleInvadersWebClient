(function() {
  'use strict';

  angular
    .module('game')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, WebSocket) {
    var vm = this;


    activate();

    function activate() {
      WebSocket.emitAction('state', 'started');
    }

    vm.actionKey = function(key, isPressed) {
      $log.debug('actionKey... '+key+' ('+isPressed+')');
      WebSocket.emitAction(key, isPressed);
    };

  }
})();
