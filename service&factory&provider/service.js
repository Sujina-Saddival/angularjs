var application = angular.module('serviceApp',[]);

application.service('random',function(){
	var num = Math.floor(Math.random()*10)
	this.generate = function(){
		return num;
	}
	this.message = "I'm service" 
});

application.factory('factory',function(){
	var factoryObj = {};
	factoryObj = "i'm Factory"
	return factoryObj;
});

application.provider('provider',function(){
	var message = "I'm Provider";
	return{
		$get: function(){
			return{
				message: message
			}
		}
	}
});
application.controller('serviceCtrl',function($scope,random,factory,provider)
{
	$scope.random = function(){
		$scope.randomnumber = random.generate();
	}
		debugger;
		$scope.message = [random.message,factory,provider.message]
})