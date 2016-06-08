'use strict';

describe('Directive: chordColor', function () {

  // load the directive's module
  beforeEach(module('newGuitarApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<chord-color></chord-color>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the chordColor directive');
  }));
});
