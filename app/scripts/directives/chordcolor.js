'use strict';

/**
 * @ngdoc directive
 * @name newGuitarApp.directive:chordColor
 * @description
 * # chordColor
 */
angular.module('newGuitarApp')
  .directive('chordColor', function () {
    return {
     scope:{
     	note: '@note',
     	color: '@color',
     	chord: '@chord'
     },
      restrict: 'EAC',
      link: function postLink(scope, element, attrs) {
        	scope.colorChange = function(selNote,selScale){
        		element.css('background-color','transparent');
        		element.css('color','white');
        		element.css('border','1px none');
        		element.css('padding','5px 5px');

        		for(var x=0;x<=selScale.length-1;x++){
        			if(selNote == selScale[x]){
        				element.css('background-color',scope.color);
        				element.css('color','black');
        				element.css('border','1px none');
        				element.css('border-radius','50%');
        				

        			}
        		}


        	}

        	scope.$watchGroup(['color','note','chord'],function(newVal,oldVal){
        		scope.color = newVal[0];
        		scope.note = newVal[1];
        		scope.chord = angular.fromJson(newVal[2]);
        		console.log(scope.note, scope.chord,scope.color);
        		scope.colorChange(scope.note,scope.chord);
        	});
      }
    };
  });
