'use strict';

angular.module('basejumps2App')
  .controller('NewchartCtrl', function ($scope) {
  	$scope.name = '';	
  	$scope.labels = new Array(3);
  	$scope.displayLabels = function() {
      alert($scope.labels.toString());
    };
    $scope.addLabel = function(){
    	$scope.labels.push("");
    }
    $scope.deleteLabel = function(index){
    	$scope.labels.splice(index,1);
    }
  });
