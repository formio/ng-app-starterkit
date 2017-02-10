(function() {
  'use strict';

  angular
    .module('formioApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $injector, FormioProvider, AppConfig, FormioResourceProvider) {
    FormioProvider.setBaseUrl(AppConfig.apiUrl);

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      });

    // Register all of the resources.
    angular.forEach(AppConfig.resources, function(resource, name) {
      FormioResourceProvider.register(name, resource.form, $injector.get(resource.resource + 'Provider'));
    });

    $urlRouterProvider.otherwise('/');
  }

})();
