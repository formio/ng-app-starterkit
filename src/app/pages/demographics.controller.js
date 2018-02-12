(function() {
  'use strict';

  angular
    .module('formioApp')
    .controller('DemographicsController', DemographicsController);

  /** @ngInject */
  function DemographicsController($scope, $state) {
   console.log('DemographicsController Loaded');
    $scope.$on('formSubmit', function(event, submission) {
      // Occurs before submission to server. The request can be cancelled with event.preventDefault();
    });

    $scope.$on('formSubmission', function(event, submission) {
      // Occurs after submission to server. Can do things like change route to a thank you page.
      $state.go('thanks');
    });

    $scope.$on('formLoad', function(err, form) {
      // Occurs after form is loaded.
    });
  }
})();
