var app = angular.module('directiveApp',[]);

app.directive('myFirstDirective',function(){
	return{

	template: "You Reached!!"
	};
});

app.controller('directiveCtrl',function(){

})