var app = angular.module('loopApp',[])

app.controller('loopCtrl',function($scope){
	var range = 10;
	var myLoop = [];
	for(i=0;i<range;i++){
		myLoop.push(i);
	}
	$scope.myLoop = myLoop

	var indexRange = new Array(20);
	$scope.indexRange = indexRange;
	})
