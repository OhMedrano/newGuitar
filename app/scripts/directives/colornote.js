'use strict';

/**
 * @ngdoc directive
 * @name newGuitarApp.directive:colorNote
 * @description
 * # colorNote
 */
angular.module('newGuitarApp')
  .directive('colorNote', function () {
    return {
    	scope:{
    		scale: '@scale',
    		note: '@note',
    		colors: '@colors'
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
        				element.css('background-color',scope.colors[x]);
        				element.css('color','black');
        				element.css('border','1px none');
        				element.css('border-radius','50%');
        				element.css('background-blend-mode','color-dodge');

        			}
        		}


        	}
        
        
       
        	scope.$watchGroup(['scale','note','colors'],function(newVal,oldVal){
        		scope.scale = angular.fromJson(newVal[0]);
        		scope.note = newVal[1];
          		scope.colors = angular.fromJson(newVal[2]);
           

        		
        		scope.colorChange(scope.note,scope.scale);
       
        	})
      }
    };
  });
