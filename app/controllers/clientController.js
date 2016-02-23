'use strict';

(function () {
	angular
		.module('turnerApp', ['ngResource'])
		.controller('homeController',
			['$scope',
			'$resource',
			function ($scope, $resource) {
				var Click = $resource('/api/clicks');

				$scope.getClicks = function () {
					Click.query(function (results) {
						$scope.clicks = results[0].clicks;
					});
				};

				$scope.getClicks();

				$scope.addClick = function () {
					Click.save(function () {
						$scope.getClicks();
					});
				};

				$scope.resetClicks = function () {
					Click.remove(function () {
						$scope.getClicks();
					});
				};

		}])
		.controller('contactController',
			['$scope',
			 function ($scope) {

				 $scope.submitForm = function(isValid) {
					console.log('submitForm');
					 // check to make sure the form is completely valid
					 if (isValid) {
						 alert('our form is amazing');
					 }

				 };


		 }]);

})();
