'use strict';

angular.module('cpl')
  .controller('HomeCtrl', function(){

      var that = this;

      this.icons = [
	  {sref:'one', file:'dice-1.svg'},
	  {sref:'two', file:'dice-2.svg'},
	  {sref:'three', file:'dice-3.svg'},
	  {sref:'four', file:'dice-4.svg'}
      ];

  });
