'use strict';

angular.module('basejumps2App')
  .controller('MainCtrl', function ($scope, $http, socket, Auth) {
    $scope.awesomeThings = [];
    $scope.isLoggedInAsync = Auth.isLoggedInAsync;
    

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.isLoggedInAsync(function(bool) {
    if (bool) { $scope.getCurrentUser = Auth.getCurrentUser().name;} 
    else { $scope.getCurrentUser = "User not logged in"; }
});

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.editThing = function() {
      $http.put('/api/things/' + $scope.myID, {name: $scope.myText});
    };


    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
