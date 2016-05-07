define(['angularAMD','socket','opt','btford-socket','ngRoute'], function (angularAMD,io,opt) {

	var app = angular.module('angularBootey', ['btford.socket-io','ngRoute']);

	app.factory('socketer', function (socketFactory) {
		var passIoSocket = io.connect(opt.service);

		socketer = socketFactory({
			ioSocket: passIoSocket,
			prefix:''
		});

		return socketer;
	});

	app.config(function ($routeProvider) {
		opt.routes.forEach(function(route){
		    $routeProvider
		    .when(route.name,angularAMD.route(route.AMDcall))
		    .otherwise({redirectTo:opt.defaultRoute});
		});
	});

	return angularAMD.bootstrap(app);

});