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
['$scope', 'DataFactory',
  function($scope, DataFactory) {
    $scope.check = false;
    $scope.newComment = null;

    var init = function () {
      $scope.newComment = DataFactory.createComment();

    };

    init();

    $scope.comments = [
      {
        name: "Timothy",
        content: "Few people come to this world to leave an indelible legacy in other people hearts, inspiring them and lighting their ways in life. Thabk you for being that person for me. ",
        class: "alert alert-success"
      },
      {
        name: "Saul from UK",
        content: "Steve Jobs not only gave birth to a pillar of technological genius in his incredibly creative and visionary life, but he also created an electronic platform in which the music industry has used to blossom to the artistic power that it is today. If it weren't for the Mac OS, some of the greatest pieces of music would not have been able to be produced or conceived with the professionalism and intricacy that certain Mac programs give us, in all genres all across the world. Steve Jobs has not only left a legacy of grandeur, but also an already gleaming piece of clay which can be shaped to be even stronger and more beautiful. The first stones he set, all those decades ago, have turned into mountains of splendour, and with his knowledge and trust carved deep in his many co-working visionaries, a true artist of the 21st century can rest in peace. ",
        class: "alert alert-info"
      },
      {
        name: "Andrés",
        content: "Thanks Steve for making Apple my way of living. ",
        class: "alert alert-warning"
      },
      {
        name: "Gary",
        content: "Our prayers are with Mr. Jobs' family and friends. He truly created the very best experience for a human to interact with a non-human. We pray that there are more innovators that fit his mold. ",
        class: "alert alert-danger"
      }
    ];

    $scope.post = function(newComment) {
      $scope.comments.push(newComment);
      console.log($scope.check);
      init();
    };

    $scope.valid = function () {
      var valid = true;
      if($scope.newComment.content !== "" && $scope.check === true) {
        valid = false;
      }

      return valid;
    }



  }]);
