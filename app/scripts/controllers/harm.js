'use strict';

/**
 * @ngdoc function
 * @name newGuitarApp.controller:HarmCtrl
 * @description
 * # HarmCtrl
 * Controller of the newGuitarApp
 */
angular.module('newGuitarApp')
  .controller('HarmCtrl', function ($scope) {
   	$scope.selFretId = null;
   	$scope.selRatioId = null;
  	$scope.selRatio = 0;
  	$scope.selFret = 0;
  	$scope.fretRatioNames = [{"name":"Show All","ratioVal":0,"color":"red"},
  							 {"name":"Half","ratioVal":1,"color":"#1413af"},
  							 {"name":"Third","ratioVal":2,"color":"#cc9900"},
  							 {"name":"Quarter","ratioVal":3,"color":"green"}];

   	$scope.fretLength = [100,
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

		$scope.changeFret = function(change){
			$scope.selFret = change;
			$scope.selFretId = change;
			
		};
		$scope.changeRatio = function(change){
			$scope.selRatio = change;
			$scope.selRatioId = change;
		};
  });
