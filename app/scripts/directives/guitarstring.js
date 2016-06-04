'use strict';

/**
 * @ngdoc directive
 * @name newGuitarApp.directive:guitarString
 * @description
 * # guitarString
 */
angular.module('newGuitarApp')
  .directive('guitarString', function () {
    return {
    	scope:{
    		root: '=root'
    	},
      templateUrl:'templates/guitarString.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.musicNotes = ["A","A#/Bb","B","C","C#/Db","D","D#/Eb","E","F","F#/Gb","G","G#/Ab"];
      	

        console.log(scope.musicNotes[scope.root]);



      }
    };
  });
