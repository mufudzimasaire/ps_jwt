'use strict';

angular.module('psJwtApp').controller('RegisterCtrl', function ($scope, $rootScope, $http, alert) {  
	
	$scope.submit = function(){	
		var url = 'http://localhost:3000/api/register';
		var user = {
			email: $scope.email,
			password: $scope.password
		};
		
		$http.post(url, user)
			.success(function(data){
				alert('success', 'OK!', 'You are now registered' + data.email);
			})
			.error(function(err){
				alert('warning', 'Opps!', 'Could not register.');
			})
	}

	
 });
