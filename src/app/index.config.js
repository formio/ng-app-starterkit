(function() {
  'use strict';

  angular
    .module('formioApp')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    $logProvider.debugEnabled(true);
  }

})();
