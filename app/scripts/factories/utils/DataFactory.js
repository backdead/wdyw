'use strict';

angular.module('wdyw')
.factory('DataFactory', [function() {
     var createGoal = function() {
      return {
       name: "",
       age: "",
       comment: "",
       class: "alert alert-danger" 
      };
    };
    
    var extracGoalObject = function (goal) {
      return {
        name: goal.name,
        age: goal.age,
        comment: goal.comment
      };
    };
    
    

    return {
      createGoal:createGoal,
      extracGoalObject: extracGoalObject
    };

  }]);