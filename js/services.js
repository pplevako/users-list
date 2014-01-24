"use strict";

angular.module('myApp.services', [])
  .service('Users', function () {
    var users = [
      {
        name: 'Paul',
        surname: 'Plevako',
        mana: 42,
        ideas: 5,
        following: 10,
        followers: 8,
        follow: false
      },
      {
        name: 'John',
        surname: 'Adams',
        mana: 102,
        ideas: 0,
        following: 50,
        followers: 0,
        follow: false
      }
    ];

    this.get = function () {
      return users;
    };
  });