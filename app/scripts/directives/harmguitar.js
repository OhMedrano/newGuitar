'use strict';

/**
 * @ngdoc directive
 * @name newGuitarApp.directive:harmGuitar
 * @description
 * # harmGuitar
 */
angular.module('newGuitarApp')
  .directive('harmGuitar', function () {
    return {
      templateUrl:'templates/harmGuitar.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
