angular.module('basejumps2App')
  .controller('VoteCtrl', function ($scope, $http, socket, $routeParams) {
  	$scope.awesomeChart = [];
    $scope.vote = {};
  	var chartid = $routeParams.id;
  	  $http.get('/api/whatsits/'+ chartid).success(function(awesomeChart) {
      $scope.awesomeChart = awesomeChart;
      // $scope.labels = awesomeChart.labels;
      // $scope.data = awesomeChart.data;
      socket.syncUpdates('whatsit', $scope.awesomeChart);
    });

     $scope.addVote = function(){
      if ($scope.vote === ''){
        return;
      }
      $scope.awesomeChart.data[0][$scope.vote.selection] = $scope.awesomeChart.data[0][$scope.vote.selection]+1;
      $http.put('/api/whatsits/'+chartid, $scope.awesomeChart).success(function(awesomeChart){
        $scope.awesomeChart = awesomeChart;
      }
      );
    }

  });