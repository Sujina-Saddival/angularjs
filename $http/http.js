var app = angular.module('HttpApp',[])

app.controller('httpCtrl',function($scope,$http){
	$http.get("file:///home/qwinix/Documents/sujina/front-end/angularjs/$http/http.json")
	.success(function(response){
		$scope.persons = response.records;
	})
})