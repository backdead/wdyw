'use strict';

angular.module('wdyw')
.service('GoalService',
['$rootScope', 'GoalFactory',  'DataFactory', 
  function($rootScope, GoalFactory, DataFactory) {
    var goals = null;
    
    this.retrieveGoals = function() {
      goals = new GoalFactory().getGoals(
      {
        
      },
      function(response) {
        
      },
      //case error
      function() {
        
      });
      
      return goals;
    };
    
  }]);
