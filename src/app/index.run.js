(function() {
  'use strict';

  angular
    .module('formioAppTemplate')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.debug('runBlock end');
  }

})();
