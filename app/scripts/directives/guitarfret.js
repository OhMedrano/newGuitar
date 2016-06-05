'use strict';

/**
 * @ngdoc directive
 * @name newGuitarApp.directive:guitarFret
 * @description
 * # guitarFret
 */
angular.module('newGuitarApp')
  .directive('guitarFret', function () {
    return {
      templateUrl:'templates/guitarFret.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
       		
      		scope.musicNotes = ["A","A#/Bb","B","C","C#/Db","D","D#/Eb","E","F","F#/Gb","G","G#/Ab"];

      		//DEFAULT STRING SETTINGS
           	scope.string1 = 7;
        	scope.string2 = 2;
        	scope.string3 = 10;
        	scope.string4 = 5;
        	scope.string5 = 0;
        	scope.string6 = 7;

        	scope.strings = [scope.string1,
        					 scope.string2,
        					 scope.string3,
        					 scope.string4,
        					 scope.string5,
        					 scope.string6];
      		//DEFAULT STRING SETTINGS

      		//SCALE FORUMLAS
      		scope.allScale = [
                          			{"name":"Major/Ionian","scale":[0,2,4,5,7,9,11]},
      						        {"name":"Minor/Aeolian","scale":[0,2,3,5,7,8,10]},
      						        {"name":"Dorian","scale":[0,2,3,5,7,9,10]},
      						        {"name":"Phrygian","scale":[0,1,3,5,7,8,10]},
      						        {"name":"Lydian","scale":[0,2,4,6,7,9,11]},
      						        {"name":"Mixolydian","scale":[0,2,4,5,7,9,10]},
      						        {"name":"Locrian","scale":[0,1,3,5,6,8,10]},
      						        {"name":"Minor Pentatonic","scale":[0,3,5,7,10]},
      						        {"name":"Major Pentatonic","scale":[0,2,4,7,9]},
      						        {"name":"Minor Blues","scale":[0,3,5,6,7,10]},
      						        {"name":"Harmonic Minor","scale":[0,2,3,5,7,8,11]},
      						        {"name":"Melodic Minor","scale":[0,2,3,5,7,9,11]},
      						        {"name":"Diminished / 8-Tone","scale":[0,2,3,5,6,8,11]}
      						];

      		//SCALE FORUMLAS

      		//CHORD FORUMLAS
      		 scope.chords = [
                        {"name":"Major","forumla":[0,4,7]},
                        {"name":"Minor","forumla":[0,3,7]},
                        {"name":"6th ","forumla":[0,4,7,9]},
                        {"name":"7th ","forumla":[0,4,7,10]},
                        {"name":"9th ","forumla":[0,4,7,10,2]},
                        {"name":"13th (Almost Impossible)","forumla":[0,4,7,10,2,5,9]},
                        {"name":"Major 7th","forumla":[0,4,7,11]},
                        {"name":"Minor 7th","forumla":[0,3,7,10]}
          		];

      		//CHORD FORUMLAS

      		//!!!FUNCTION!!!
      		//Change the root of the string
      		scope.changeNote = function(string,note){
      			var note = this;
      			var strin = 'scope.string'+string;

      			console.log(strin);
      			console.log(note.$index);

      			string = note.$index;

      			
      			
      		};



      		//!!!FUNCTION!!!












      		//!!!FUNCTION!!!WATCH GROUP 
      		//It watches for scope changes.
      		scope.$watchGroup(['strings','stringE','stringB','stringG','stringD','stringA','stringEe'],function(newVal,oldVal){
      			scope.strings = newVal[0];
      			scope.stringE = newVal[1];
      			scope.stringB = newVal[2];
      			scope.stringG = newVal[3];
      			scope.stringD = newVal[4];
      			scope.stringA = newVal[5];
      			scope.stringEe = newVal[6];
      		})





      		//!!!FUNCTION!!!WATCH GROUP 



      }
    };
  });
