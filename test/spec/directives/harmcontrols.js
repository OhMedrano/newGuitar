'use strict';

describe('Directive: harmControls', function () {

  // load the directive's module
  beforeEach(module('newGuitarApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<harm-controls></harm-controls>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the harmControls directive');
  }));
});
