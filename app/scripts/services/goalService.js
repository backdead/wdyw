'use strict';

angular.module('wdyw')
.service('GoalService',
['$rootScope', 'GoalFactory', 'ApplicationMessages', 'DataFactory', 'WebServiceErrors',
  function($rootScope, GoalFactory, ApplicationMessages, DataFactory, WebServiceErrors) {
    var goals = null;
    
    this.retriveGoals = function() {
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
