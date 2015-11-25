'use strict';

angular.module('basejumps2App')
  .controller('NewpageCtrl', function ($scope, $http, socket, Auth, $routeParams, $location) {
  	$scope.awesomeWhatsit = [];
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.user = $routeParams.user;
  	   $http.get('/api/whatsits').success(function(awesomeWhatsit) {
      $scope.awesomeWhatsit = awesomeWhatsit;
      // $scope.labels = awesomeWhatsit[0].labels;
      // $scope.data = awesomeWhatsit[0].data;
      socket.syncUpdates('whatsit', $scope.awesomeWhatsit);
    });
    $scope.deleteChart = function(whatsit) {
      $http.delete('/api/whatsits/' + whatsit._id);
    };
    $scope.editChart = function(whatsit) {
      $location.path('/editchart/'+whatsit._id);
    };
  
  });
