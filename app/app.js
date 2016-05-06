define(['angularAMD','socket','btford-socket','ngRoute',], function (angularAMD,io) {

	var app = angular.module('footey', ['btford.socket-io','ngRoute']);

	app.factory('socketer', function (socketFactory) {
		var passIoSocket = io.connect('http://sockey.api');

		socketer = socketFactory({
			ioSocket: passIoSocket,
			prefix:''
		});

		return socketer;
	});

	app.config(function ($routeProvider) {
	    $routeProvider
	    .when(
	        "/home",
	        angularAMD.route({
	            templateUrl: '/app/views/home.html',
	            controller: 'HomeController',
	            controllerUrl: '/app/controllers/home'
	        })
	    )
	    .otherwise({
	    	redirectTo: '/home'
	    });
	});

	return angularAMD.bootstrap(app);

});