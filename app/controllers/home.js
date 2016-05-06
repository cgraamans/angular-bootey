define(['app'], function (app) {

	console.log(app);

    app.controller('HomeController', ['$scope','socketer', function ($scope, $window) {
        $scope.title = "Footey";

        $scope.example = function() {

			socketer.emit('example',{"foo":"bar"});
		    socketer.on('example_data', function (data) {
		      $scope.theData = data.message;
		    });        	

        };

    }]);
});