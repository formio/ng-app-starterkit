(function() {
  'use strict';

  angular
    .module('formioAppTemplate')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    $logProvider.debugEnabled(true);
  }

})();
