'use strict';

describe('Controller: FretsCtrl', function () {

  // load the controller's module
  beforeEach(module('newGuitarApp'));

  var FretsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FretsCtrl = $controller('FretsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
