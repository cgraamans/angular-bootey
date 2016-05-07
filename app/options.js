define({

	// SOCKET.IO
	service: 'http://sockey.api', // Location of the Socket.IO service

	// ROUTING
	defaultRoute: '/home', // Default location
	routes: [

		{
			name:'/home',
			AMDcall: {
	            templateUrl: '/app/views/home.html',
	            controller: 'HomeController',
	            controllerUrl: '/app/controllers/home'
	        }
		
		},

	]

});