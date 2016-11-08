(function() {
  'use strict';

  angular
    .module('formioApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, FormioProvider, AppConfig) {
    FormioProvider.setBaseUrl(AppConfig.apiUrl);

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
