define(['app'], function (app) {

    app.controller('HomeController', ['$scope','$window','socketer', function ($scope, $window, socketer) {

        $scope.example = function() {

			socketer.emit('example',{"foo":"bar"});
		    socketer.on('example_data', function (data) {
		      $scope.theData = data.message;
		    });        	

        };

    }]);
    
});