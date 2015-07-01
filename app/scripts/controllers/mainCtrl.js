'use strict';

/**
 * @ngdoc function
 * @name wdywApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wdywApp
 */
angular.module('wdyw')
.controller('MainCtrl',
['$scope', 'DataFactory', 'GoalService',
  function($scope, DataFactory, GoalService) {
    
    $scope.newGoal = null;
    
    $scope.goals = GoalService.retrieveGoals();
    
    var init = function () {
      $scope.newGoal = DataFactory.createGoal();    
    };

    init();
    
    //var counter = $scope.comments.slice(-1)[0];
    $scope.glued = true;
    
    $scope.post = function(newGoal) {
        GoalService.createGoal(newGoal);
    };
    

    $scope.isNoAge = function () {
      var valid = true;
      if($scope.newGoal.age !== "") {
        valid = false;
      }
      
      return valid;
    };
    
    $scope.isNoComment = function () {
      var valid = true;
      if($scope.newGoal.comment !== "") {
        valid = false;
      }
      
      return valid;
    };
    
    $scope.isNoName = function() {
        var valid = true;
        if($scope.newGoal.name !== "") {
            valid = false;
        }
        
        return valid;
    };


  }]);
