'use strict';

angular.module('basejumps2App')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/newchart', {
        templateUrl: 'app/newchart/newchart.html',
        controller: 'NewchartCtrl'
      })
     .when('/editchart/:id', {
        templateUrl: 'app/newchart/editchart.html',
        controller: 'EditchartCtrl'
      })
      .when('/newchart/:id', {
        templateUrl: 'app/newchart/vote.html',
        controller: 'VoteCtrl'
      });
  });
