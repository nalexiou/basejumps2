'use strict';

angular.module('basejumps2App')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/newpage', {
        templateUrl: 'app/newpage/newpage.html',
        controller: 'NewpageCtrl'
      })
      .when('/newpage/:user', {
        templateUrl: 'app/newpage/newpage.html',
        controller: 'NewpageCtrl'
      })
      .when('/newpage/:id', {
        templateUrl: 'app/newpage/chart.html',
        controller: 'ChartCtrl'
      });
  });
