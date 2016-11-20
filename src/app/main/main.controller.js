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

    vm.pressLeft = function() {
      $log.debug('pressLeft...');
      WebSocket.emitAction('pressUp', 'left');

    };
    vm.pressRight = function() {
      $log.debug('pressRight...');
      WebSocket.emitAction('pressUp', 'right');

    };
    vm.pressFire = function() {
      $log.debug('pressFire...');
      WebSocket.emitAction('press', 'fire');

    };

  }
})();
