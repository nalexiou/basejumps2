'use strict';

angular.module('basejumps2App')
  .controller('EditchartCtrl', function ($scope, $http, socket, $routeParams, $location, Auth) {
    $scope.awesomeChart = {};
    $scope.isLoggedIn = Auth.isLoggedIn;
    var chartid = $routeParams.id;
      $http.get('/api/whatsits/'+ chartid).success(function(awesomeChart) {
        if (Auth.getCurrentUser().email === awesomeChart.user) {
      $scope.awesomeChart = awesomeChart;
    }
    });

    $scope.addLabel = function(){
      $scope.awesomeChart.labels.push("");
      $scope.awesomeChart.data[0].push(0);
    }

    $scope.deleteLabel = function(index){
      $scope.awesomeChart.labels.splice(index,1);
      $scope.awesomeChart.data[0].splice(index,1);
    }

    $scope.saveChart = function() {
      if($scope.awesomeChart.name === "" || $scope.awesomeChart.labels === [] || $scope.awesomeChart.labels.filter(function(value){ value === ''}).length>0 || !Auth.isLoggedIn()) {
        return;
      }

      $http.put('/api/whatsits/'+chartid, $scope.awesomeChart).success(function(awesomeChart){
        $location.path('/newpage/'+ awesomeChart.user + '/' +awesomeChart._id);
      } 
      );
    };
  });