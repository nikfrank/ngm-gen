'use strict';

angular.module('cpl', ['ngMaterial', 'ui.router'])
    .config(function ($urlRouterProvider){
	$urlRouterProvider.deferIntercept();
    })
    .run(function ($rootScope, $urlRouter, $location, $state) {
	window.initPath = $location.path();
	window.loadPath = '/';
	$rootScope.$on('$locationChangeSuccess', function(e, newUrl){
	    e.preventDefault();

	    var nuHash = newUrl.split('#')[1];
	    if(nuHash === '/'){
		setTimeout(function(){
		    $location.path(window.loadPath);
		    window.loadPath = window.initPath;
		}, 30);
		$urlRouter.sync();
	    }
	    else{
		console.log('nuhash', nuHash);
		$rootScope.$broadcast('newUrl', nuHash);
	    }
	});

	$urlRouter.listen();
	$location.path('/');
	setTimeout(function(){
	    $rootScope.$broadcast('newUrl', window.initPath);
	    $location.path(window.initPath);
	}, 60);
    })
    .config(function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise("/");

	$stateProvider
	    .state('home', {
		url:'/',
		templateUrl: "views/home.html",
		controller: 'HomeCtrl as home'
	    })
	    .state('home.home', {
		views: {
		    'one': {
			url:'/one',
			templateUrl:'views/one.html',
			controller:'OneCtrl as one'
		    },
		    'two': {
			url:'/two',
			templateUrl:'views/two.html',
			controller:'TwoCtrl as two'
		    },
		    'three': {
			url:'/three',
			templateUrl:'views/three.html',
			controller:'ThreeCtrl as three'
		    },
		    'four': {
			url:'/four',
			templateUrl:'views/four.html',
			controller:'FourCtrl as four'
		    }
		}
	    });
  });
