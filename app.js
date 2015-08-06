'use strict';

angular.module('cpl', ['ngMaterial', 'ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise("/");

	$stateProvider
	    .state('home', {
		url: "/",
		templateUrl: "views/home.html",
		controller: 'HomeCtrl as home'
	    })
	    .state('home.home', {
		views: {
		    'one': {
			templateUrl:'views/one.html',
			controller:'OneCtrl as one'
		    },
		    'two': {
			templateUrl:'views/two.html',
			controller:'TwoCtrl as two'
		    },
		    'three': {
			templateUrl:'views/three.html',
			controller:'ThreeCtrl as three'
		    },
		    'four': {
			templateUrl:'views/four.html',
			controller:'FourCtrl as four'
		    }
		}
	    });

  });
