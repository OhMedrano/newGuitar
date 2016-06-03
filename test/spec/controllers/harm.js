'use strict';

describe('Controller: HarmCtrl', function () {

  // load the controller's module
  beforeEach(module('newGuitarApp'));

  var HarmCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HarmCtrl = $controller('HarmCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
