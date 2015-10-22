'use strict';

angular.module('basejumps2App')
  .controller('NewchartCtrl', function ($scope, $http, $location) {
  	$scope.name = '';	
  	$scope.labels = new Array(3);
    var data = [[0,0,0]];

  	$scope.displayLabels = function() {
      alert($scope.labels.toString());
    };
    $scope.addLabel = function(){
    	$scope.labels.push("");
      data[0].push(0);
    }
    $scope.deleteLabel = function(index){
    	$scope.labels.splice(index,1);
      data[0].pop(0);
    }

    $scope.createChart = function() {
      if($scope.name === '' || $scope.labels.filter(function(value){ value === ''}).length>0) {
        return;
      }

      $http.post('/api/whatsits', { name: $scope.name, labels: $scope.labels, data: data })
      .success(function(chart){
      	$location.path('/newchart/'+chart._id);
      });
    };
  });
