'use strict';

angular.module('cpl')
  .controller('HomeCtrl', function($state, $location, $scope, $rootScope){

      $state.go('home.home');
console.log($location.path());
      var that = this;

      this.toolItems = [
	  {
	      title:'one',
	      content:'blah'
	  },
	  {
	      title:'two',
	      content:'blah blah'
	  },
	  {
	      title:'three',
	      content:'blahblahblah'
	  },
	  {
	      title:'four',
	      content:'blblahahblahblah'
	  }
      ];

      $scope.$watch('selectedIndex', function(n, o){
	  if(typeof n === 'undefined') return;
	  console.log(n, o, '/'+that.toolItems[n].title);
	  $location.path('/'+that.toolItems[n].title);
      });


      $rootScope.$on('newUrl', function(e, data){
	  console.log('to', data, $scope.selectedIndex);
	  for(var i=that.toolItems.length; i-->0;)
	      if('/'+that.toolItems[i].title === data)
		  if($scope.selectedIndex !== i)
		      $scope.selectedIndex = i;
      });
  });
