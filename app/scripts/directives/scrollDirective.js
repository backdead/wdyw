'use strict';

/**
 * @ngdoc function
 * @name wdywApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wdywApp
 */
angular.module('wdyw')
.directive("scrollBottom", [  
function () {
    return {
        link: function (scope, element, attr) {
            var $id = $("#" + attr.scrollBottom);
            $(element).on("click", function () {
                $id.scrollTop($id[0].scrollHeight);
            });
        }
    }
}]);

