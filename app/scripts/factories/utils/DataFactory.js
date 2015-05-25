'use strict';

angular.module('wdyw')
.factory('DataFactory', [function() {
     var createGoal = function() {
      return {
       name: "",
       age: "",
       content: "",
       class: "alert alert-danger" 
      };
    };
    
    

    return {
      createGoal:createGoal
    };

  }]);