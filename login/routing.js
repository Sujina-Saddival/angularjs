var app = angular.module('RoutingApp',['ngRoute']);

app.config(function($routeProvider)
{
	$routeProvider
	.when('/',{
		// template: "Welocme user!"
		templateUrl: "login.html"

	})
	.when('/dashboard',{
		// template: "Welcome user, With another page!"
		resolve: {
			"check": function($location,$rootScope){
				if(!$rootScope.logIn){
					$location.path('/')
				}
			}
		},
					templateUrl: "dashboard.html"
	})
	.otherwise({
		redirectTo: '/'
	});
});

app.controller('loginCtrl',function($scope,$location,$rootScope)
{
	$scope.submit = function(){
		var uname = $scope.username;
		var password = $scope.password;

		if (uname && password){
			$location.path('/dashboard')
			$rootScope.logIn = true;
		}

		else
		{
			alert("worng input")
		}
	}
})