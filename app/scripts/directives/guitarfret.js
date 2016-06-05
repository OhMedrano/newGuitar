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
       		


       		//MUSIC NOTES
       		//Sharps and Flats, for you music geeks
      		scope.musicSharps = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];
      		scope.musicFlats = ["A","Bb","B","C","Db","D","Eb","E","F","Gb","G","Ab"];
      		scope.musicNotes = scope.musicFlats;
      		//MUSIC NOTES

      		//VARIABLES FOR DISPLAY PURPOSES
      		scope.changeRoots = 0;


      		//VARIABLES FOR DISPLAY PURPOSES



      		//DEFAULT STRING SETTINGS
           /*	scope.string1 = 7;
        	scope.string2 = 2;
        	scope.string3 = 10;
        	scope.string4 = 5;
        	scope.string5 = 0;
        	scope.string6 = 7;*/

        	scope.strings = [7,2,10,5,0,7];
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

      		//ALTERNATE TUNING FORMULAS
      		scope.tunings = [
      				{"name":"Standard","forumla":[7,2,10,5,0,7]},
      				{"name":"D Tuning","forumla":[5,0,8,3,11,5]},
      				{"name":"C Tuning","forumla":[3,10,6,1,8,3]},
      				{"name":"B Tuning","forumla":[2,11,5,0,7,2]},
      				{"name":"Full Step Down","forumla":[5,0,8,3,10,5]},
      				{"name":"Minor Third","forumla":[6,3,0,9,6,3]},
      				{"name":"All Fourths","forumla":[7,3,8,5,0,8]},
      				{"name":"Major Sixth","forumla":[0,3,6,9,0,3]},
      				{"name":"Open A","forumla":[7,0,7,4,0,7]},
      				{"name":"Open B","forumla":[6,2,9,2,9,2]},
      				{"name":"Open C","forumla":[7,3,10,3,10,3]},
      				{"name":"Open D","forumla":[5,0,9,5,0,5]},
      				{"name":"DADDAD","forumla":[5,0,5,5,0,5]},
      				{"name":"Cello/Standard","forumla":[7,2,0,5,11,7]},
      				{"name":"Hot Type","forumla":[5,0,9,7,2,0]},
      				{"name":"Augmented Fourths","forumla":[9,3,9,3,9,3]}


      		];
      		//ALTERNATE TUNING FORMULAS


      		//!!!FUNCTION!!!
      		//Change the root of the string
      		scope.changeNote = function(string,note){
      			console.log(scope.strings[string]);

      			scope.strings[string] = this.$index;
      			
      			
      		};



      		//!!!FUNCTION!!!

      		scope.changeGroup = function(chang){
      			console.log(chang);
      			scope.strings = chang;

      			return scope.strings;

      		};










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
