(function() {
  'use strict';

  angular
    .module('formioAppTemplate')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, FormioProvider, AppConfig) {
    FormioProvider.setBaseUrl(AppConfig.apiUrl);

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
