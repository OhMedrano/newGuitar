'use strict';

/**
 * @ngdoc directive
 * @name newGuitarApp.directive:navMenu
 * @description
 * # navMenu
 */
angular.module('newGuitarApp')
  .directive('navMenu', function () {
    return {

      templateUrl: 'templates/navMenu.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.tools = [
    			
    			{'name':'Harmonic Visualizer','link':'#/harm'},
    			{'name':'Visual Fretboard','link':'#/frets'}


    	]

      }
    };
  });
