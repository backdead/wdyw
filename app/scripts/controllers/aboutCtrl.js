'use strict';

/**
 * @ngdoc function
 * @name wdywApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the wdywApp
 */
angular.module('wdyw')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
