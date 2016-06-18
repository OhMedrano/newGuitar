'use strict';

/**
 * @ngdoc directive
 * @name newGuitarApp.directive:harmControls
 * @description
 * # harmControls
 */
angular.module('newGuitarApp')
  .directive('harmControls', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the harmControls directive');
      }
    };
  });
