'use strict';


angular.module('wdyw')
.factory('CommentFactory',
['$resource', 'WsSettings',
  function ($resource, WsSettings) {

    return function () {
    
      var getComments = {
        method: 'GET',
        isArray : true
      };
      
      var createComment = {
        method: 'POST',
        isArray: false
      };
      
      return $resource(WsSettings.HOST + WsSettings.COMMENT,
      {},
      {
        getComments: getComments,
        createComment: createComment
      });
    };
  }]);


