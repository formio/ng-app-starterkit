(function() {
  'use strict';

  angular
    .module('formioApp')
    .config(config);

  /** @ngInject */
  function config($logProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $logProvider.debugEnabled(true);
  }
})();
