(function() {
  'use strict';

  angular
    .module('formioApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, AppConfig) {
    $log.debug('runBlock end');

    // Add the forms to the root scope.
    angular.forEach(AppConfig.forms, function(url, form) {
      $rootScope[form] = url;
    });
  }

})();
