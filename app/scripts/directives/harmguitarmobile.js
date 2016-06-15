'use strict';

/**
 * @ngdoc directive
 * @name newGuitarApp.directive:harmGuitarMobile
 * @description
 * # harmGuitarMobile
 */
angular.module('newGuitarApp')
  .directive('harmGuitarMobile', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the harmGuitarMobile directive');
      }
    };
  });
