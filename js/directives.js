"use strict";

angular.module('myApp').directive('followMe',
  function () {

    return {
      restrict: 'EA',
      template: '<span ng-mouseenter="hoverFunc()" ng-mouseleave="hoverFunc()">' +
        '<img ng-hide="hover" ng-src="{{follow ? \'img/image01.png\' : \'img/image00.png\'}}" />' +
//        follow-button btn-warning-my
        '<a ng-show="hover" ng-click="click()" ng-class="follow ? \'btn-follow unfollow\' : \'btn-follow\'" class="btn">{{follow ? unfollowText : followText }}</a>' +
        '</span>',
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