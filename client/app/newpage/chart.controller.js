angular.module('basejumps2App')
  .controller('ChartCtrl', function ($scope, $http, socket, $routeParams) {
  	$scope.awesomeWhatsit = [];
  	var chartid = $routeParams.id;
  	  $http.get('/api/whatsits/'+ chartid).success(function(awesomeWhatsit) {
      $scope.awesomeWhatsit = awesomeWhatsit;
      $scope.labels = awesomeWhatsit.labels;
      $scope.data = awesomeWhatsit.data;
      socket.syncUpdates('whatsit', $scope.awesomeWhatsit);
    });

  });