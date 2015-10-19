'use strict';

describe('Controller: NewchartCtrl', function () {

  // load the controller's module
  beforeEach(module('basejumps2App'));

  var NewchartCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewchartCtrl = $controller('NewchartCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
