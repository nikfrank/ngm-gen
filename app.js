'use strict';

angular.module('cpl', ['ngMaterial', 'ui.router'])
    .config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise("/");

	$stateProvider
	    .state('home', {
		url:'/',
		templateUrl: "views/home.html",
		controller: 'HomeCtrl as home'
	    })
	    .state('home.one', {
		url:'one',
		templateUrl:'views/one.html',
		controller:'OneCtrl as one'
	    })
	    .state('home.two', {
		url:'two',
		templateUrl:'views/two.html',
		controller:'TwoCtrl as two'
	    })
	    .state('home.three', {
		url:'three',
		templateUrl:'views/three.html',
		controller:'ThreeCtrl as three'
	    })
	    .state('home.four', {
		url:'four',
		templateUrl:'views/four.html',
		controller:'FourCtrl as four'
	    });
  });
