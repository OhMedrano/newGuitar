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
    	scope:{
    		fretRatio: '@ratio',
    		startFret: '@start'

    	},
      templateUrl:'templates/harmGuitar.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      		if(!scope.fretRatio){
      			scope.fretRatio = 0;
      		}
      		if(!scope.startFret){
      			scope.startFret = 0;
      		}


      		scope.fretLength = [100,
							97,
							91,
							86.5,
							81.5,
							77,
							73,
							68.5,
							64,
							61,
							58,
							55,
							51.5,
							49,
							46,
							43,
							41,
							39,
							37,
							35,
							33,
							31];

			scope.$watchGroup(['fretRatio','startFret'],function(newVal,oldVal){
				scope.fretRatio = newVal[0];
				scope.startFret = newVal[1];


			})


      }
    };
  });
