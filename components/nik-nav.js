'use strict';

angular.module('cpl')
    .directive('nikNavBar', function(){
	return {
	    templateUrl: 'components/nik-nav.html',
	    restrict: 'A',
	    scope:true,
	    transclude:false,
	    controllerAs:'nvb',
	    controller: function($scope, $state, $location){
		
		$scope.navigate = function(address){
		    $location.path(address)
		    console.log('navto',address)
		}

		
	    }
	};
    });
