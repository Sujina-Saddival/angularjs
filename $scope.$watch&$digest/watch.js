var app = angular.module('watchApp',[])

app.controller('watchCtrl',function($scope){
	var counter = 0

	// $watch
	$scope.$watch('myWatch',function(newValue,oldValue){
		console.log("new value is" + newValue)//its from $watch,gets the updated value
		console.log("old value is"+ oldValue)
		$scope.counter = counter++;
		if($scope.counter==50){
			alert("its just half was left")
		}
	})


	// for random using $digest
	$scope.randomnumber = Math.random();
	document.querySelector(".random").addEventListener('click',function(){
		console.log("button clicked")
		$scope.randomnumber = Math.random();
		$scope.$digest();
	})
	})
