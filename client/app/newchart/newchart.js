'use strict';

angular.module('basejumps2App')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/newchart', {
        templateUrl: 'app/newchart/newchart.html',
        controller: 'NewchartCtrl'
      });
  });
