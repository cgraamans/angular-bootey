# ANGULAR-BOOTEY

An Asynchronously loaded Bootstrap Client using AngularJS/RequireJS for Socket.io Standalone Servers

## What is Angular Boot?

Angular-boot is a ready to use bootstrap for AngularJS applications which want to use Socket.io standalone services to provide their data. This bootstrap implementation bootstraps AngularJS via RequireJS to assure that the application loads controllers, factories and directives as and when they are needed.

In short, Angular-Boot gives you:
- Asynchronously loaded AngularJS modules via RequireJS
- Ready-to-use Socket.io implementation of the btford-socket-io provider.

#### Note: If you're looking for a quick standalone socket.io mvc framework for Angular-Boot, it functions very nicely with [Sockey, the standalone Socket.io MVC framework](https://github.com/cgraamans/sockey) that I've written.

Angular-Bootey Uses:
- [AngularJS 1.x](https://angularjs.org/)
  - [Marcos Lin's AngularAMD](https://github.com/marcoslin/angularAMD)
  - [Angular-Route](https://docs.angularjs.org/api/ngRoute)
- [Socket.io](http://socket.io/)
  - Socket.io's Client
  - [Brian Ford's Angular Socket.io Provider](https://github.com/btford/angular-socket-io)
- [jQuery 1.12.3](https://jquery.com/) (update as necessary)
- [RequireJS](http://requirejs.org/)

## Requirements

The requirements for Angular-Bootey are pretty simple...

- A Webserver for your application
- A Standalone Socket.io server/service
- The npm package

## Installation

To install Angular-Boot you will need to install npm and a webserver (for example apache) on your box. Once you have done so, navigate to the place you want to host the files and...

    git clone https://github.com/cgraamans/angular-bootey
    cd angular-bootey
    npm install

## Setup

To set up your routes and your socket.io connection, you need to edit your options file.

  cd app
  vim options.js

Here you'll be able to set your routes, your default routes and your socket.io standalone server URL.

Routing is done within the routing object in the options. Use the AMDCall object. For more information on routing see [the AMD readme](https://github.com/marcoslin/angularAMD#on-demand-loading-of-controllers).

   		{
			name:'/home',
			AMDcall: {
	            templateUrl: '/app/views/home.html',
	            controller: 'HomeController',
	            controllerUrl: '/app/controllers/home'
	        }
		
		},


That's it! Point your webserver to the project page and you're set to start building your application.

## Usage

For instructions on creating controllers, directives and for more information, see the [AngularAMD Readme](https://github.com/marcoslin/angularAMD). It explains everything you'll need to know.

Do note that you need to include socketer as a reference in the controller to pass the factory along if you intend to use the socket connection:

    define(['app'], function (app) {

        app.controller('HomeController', ['$scope','socketer', function ($scope, $window) {

        	// Your code here

        }]);

    }];

Due to the implementation via AMD, Using angular-socket-io in angular-bootey is slightly different than its [Readme](https://github.com/btford/angular-socket-io) implies...

To initiate a socket connection use the __socketer__ object.

    $scope.example = function() {

        socketer.emit('example',{"foo":"bar"});
        socketer.on('example_data', function (data) {
        $scope.theData = data.message;

    });        	

};

