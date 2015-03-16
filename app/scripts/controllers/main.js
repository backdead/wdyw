'use strict';

/**
 * @ngdoc function
 * @name wdywApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wdywApp
 */
angular.module('wdywApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
