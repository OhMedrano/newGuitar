'use strict';

/**
 * @ngdoc function
 * @name newGuitarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newGuitarApp
 */
angular.module('newGuitarApp')
  .controller('MainCtrl', function ($scope) {
    	$scope.tools = [
    			{'name':'Home','link':'#/'},
    			{'name':'Harmonic Visualizer','link':'#/harm'},
    			{'name':'Visual Fretboard','link':'#/frets'}


    	]




  });
