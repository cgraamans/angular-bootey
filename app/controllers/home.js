define(['app'], function (app) {

    app.controller('HomeController', ['$scope','socketer', function ($scope, $window) {

        $scope.example = function() {

			socketer.emit('example',{"foo":"bar"});
		    socketer.on('example_data', function (data) {
		      $scope.theData = data.message;
		    });        	

        };

    }]);
});