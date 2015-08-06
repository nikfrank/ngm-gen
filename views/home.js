'use strict';

angular.module('cpl')
  .controller('HomeCtrl', function($state){

      $state.go('home.home');

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
      ]
  });
