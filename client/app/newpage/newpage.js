'use strict';

angular.module('basejumps2App')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/newpage', {
        templateUrl: 'app/newpage/newpage.html',
        controller: 'NewpageCtrl'
      });
  });
