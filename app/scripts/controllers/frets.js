'use strict';

/**
 * @ngdoc function
 * @name newGuitarApp.controller:FretsCtrl
 * @description
 * # FretsCtrl
 * Controller of the newGuitarApp
 */
angular.module('newGuitarApp')
  .controller('FretsCtrl', function ($scope) {
   $scope.fretboard = ['images/fretboard/fretboard.png',
   						'images/fretboard/leftFretboard.png',
   						'images/fretboard/mobileFretboard.png'
  					 ];

  	$scope.musicSharps = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];
  });
