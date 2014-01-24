angular.module('myApp.controllers', [])
  .controller('UsersCtrl', function ($scope, Users) {
    this.list = Users.get();


    this.follow = function (user) {
      user.follow = !user.follow;
    };

  });