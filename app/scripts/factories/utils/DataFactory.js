'use strict';

angular.module('wdyw')
.factory('DataFactory', [function() {
     var createComment = function() {
      return {
       name: "anonymous",
       content: "",
       class: "alert alert-danger" 
      };
    };
    
    

    return {
      createComment:createComment
    };

  }]);