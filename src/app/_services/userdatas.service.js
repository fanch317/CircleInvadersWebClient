/**
*
* User datas
*
*/

(function() {
  'use strict';

  angular.module('game')
  .service('UserDatas', function($log, $rootScope) {

    this.webClients = {};

    this.addWebClient = function(webClientId)
    {
      var webClient = {id: webClientId }
      this.webClients[webClientId] = webClient;
      $rootScope.$apply();
    }
    this.removeWebClient = function(webClientId)
    {
      if(this.webClients[webClientId] !== undefined){
        delete this.webClients[webClientId];
      }
      $rootScope.$apply();
    }
    this.getAllClients = function()
    {
      return this.webClients;
    }

  });

})();
