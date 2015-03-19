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
    $scope.age = {
      value: ""
    };
    
    $scope.newComment = null;

    var init = function () {
      $scope.newComment = DataFactory.createComment();
      $scope.age.value = "";
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
      },
      {
        name: "Sean",
        content: "Mr. Jobs was an inspiration to me as a teacher of elementary school students! I can remember cherishing my first IBM computer and marveling at the pure magic of it all when I was a child. Now that I am an adult, I am blessed every time I see one of my students work with an iPad or iPod. I see a spark of creative magic that Mr. Jobs himself would have been proud to see. I could only imagine Mr. Jobs having the same spark of genius in his eyes when he was their age. I pray that Mr. Jobs was able to see the final good work of his hands with the iPhone 4S! I am hopeful that my students path will be just as bright as the path Mr. Jobs and Apple blazed before them. Rest in Peace Mr. Jobs, the world is a better place because you lived!",
        class: "alert alert-danger"
      },
      {
        name: "Kevin",
        content: "Hi Steve, I hope you are there hearing me. I know you are in my life, everywhere I go, anybody I talk to you know. You are my iPhone, MacBook Pro. You are one of the greatest innovators that ever came. Rest in peace. ",
        class: "alert alert-danger"
      },
      {
        name: "Peter",
        content: "Thank you for everything. Im happy to say that eventually my kids will learn about you in school and your name will be with the greats like J.D. Rockefeller and Henry Ford. Great American Icons that revolutionized the business world today. ",
        class: "alert alert-danger"
      },
      {
        name: "Lauren",
        content: "Dear Steve, I honestly was not very familiar with Apple and Apple products until the past few years, and I didn't realize you were the man behind the apple until a couple years ago. I've always admired your products, and never dreamed I would own any until I was a lot older and working in the real world (I am currently in my senior year of college). However, through hard work I have done now, I acquired a Macbook this past year, and was surprised with an Iphone by my parents for being on the Dean's list. Those who know me eventually got annoyed with me constantly saying, \" I can\'t believe I have a Mac, I can\'t believe I have an Iphone.\" Your life\'s achievements are incredible. You were blessed with a gift, and you shared it with the world. Not many can attest to that. As I mentioned, I do not know you aside from what I have read. I know you through the Macbook I am currently typing on, and the Iphone that is next to me. Regardless of how I know you, your passing strikes a chord with me. It is so hard to see someone with so much to give be taken so soon. Even as I type this I am at a loss of what to say. A part of me doesn\'t even know why I feel this need to say anything at all. I\'ll end with condolences to your family and friends. And a thank you, for being who you were, and doing everything you did while you were here. ",
        class: "alert alert-danger"
      },
      {
        name: "Kanayo",
        content: "I just hope Steve knew how much he was appreciated. He touched the world in ways he probably didn't know. I know majority of the products that come from Apple are as a result of all the talent there but his vision and guidance and ability to look into the future helped shaped the company. Steve has been an inspiration to me, I wish I was able to meet him in person to express my appreciation for his passion that showed in the products he made. He did make the best products in the world. He really did care about the users as it showed in the products he made. We love you steve.",
        class: "alert alert-danger"
      }
      
    ];
    
    //var counter = $scope.comments.slice(-1)[0];
    $scope.glued = true;
    
    $scope.post = function(newComment) {
      $scope.comments.push(newComment);
      //console.log($scope.comments[0]);
      //$scope.comments.splice($scope.comments.indexOf($scope.comments[0]), 1);
      init();
    };
    

    $scope.isNoAge = function () {
      var valid = true;
      if($scope.age.value !== "") {
        valid = false;
      }
      
      return valid;
    };
    
    $scope.isNoContent = function () {
      var valid = true;
      if($scope.newComment.content !== "") {
        valid = false;
      }
      
      return valid;
    }



  }]);
