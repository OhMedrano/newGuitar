'use strict';

/**
 * @ngdoc directive
 * @name newGuitarApp.directive:mobileString
 * @description
 * # mobileString
 */
angular.module('newGuitarApp')
  .directive('mobileString', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the mobileString directive');
      }
    };
  });
