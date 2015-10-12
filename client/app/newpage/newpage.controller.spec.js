'use strict';

describe('Controller: NewpageCtrl', function () {

  // load the controller's module
  beforeEach(module('basejumps2App'));

  var NewpageCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewpageCtrl = $controller('NewpageCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
