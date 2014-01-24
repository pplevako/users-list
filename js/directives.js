"use strict";

angular.module('myApp').directive('followMe',
  function () {

    return {
      restrict: 'EA',
      templateUrl: 'templates/followMe.html',
      scope: {
        'click': '&',
        follow: '=',
        followText: '@',
        unfollowText: '@'
//        hover: false
//        ratingValue: '='
      },
      link: function (scope, element, attrs) {
        scope.hover = false;
        scope.hoverFunc = function () {
          scope.hover = !scope.hover;
        }


//        element.parent().bind('mouseenter', function() {
//          element.show();
//        });
//        element.parent().bind('mouseleave', function() {
//          element.hide();
//        });
      }
    };
  });