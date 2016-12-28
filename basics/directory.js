// angular.module('directoryApp',[])
// 	.controller('directoryController',function($scope){
// 		$scope.list=[
// 			{name:'qwinix',age:10},
// 			{name:'V2Soft',age:20},
// 			{name:'ArisGlobal',age:50},
// 			{name:'V2Soft',age:20}
// 		]
// 		$scope.capture = function(txt){
// 			alert("hello,its AngularJS " + txt)
// 		}
// 			$scope.push = function(){
// 			$scope.list.push({name:$scope.name,age:$scope.age});
// 			$scope.name=''
// 			$scope.age=null
// 		}
// 	});

// using function without scope and should change the ng-controller name as -> ng-controller="directoryController as dirList"

angular.module('directoryApp',[])
	.controller('directoryController',function($scope,$http){
		var dirList = this
		dirList.list=[
			{name:'qwinix',age:190},
			{name:'V2Soft',age:0},
			{name:'ArisGlobal',age:130},
			{name:'BHae',age:20},
			{name:'Cognizant',age:520},
			{name:'HP',age:10}
		]
		dirList.capture = function(txt){
			alert("hello,its AngularJS " + txt)
		}

		dirList.push = function(){
			dirList.list.push({name:dirList.name,age:dirList.age});
			dirList.name=''
			dirList.age=null
		}

		$scope.show1 = "msg1";
		dirList.toggleshow = function(){
			$scope.show1  = $scope.show == 'msg1' ? 'msg2' : 'msg1'; 
		}

		
		$scope.show = "msg1";
		dirList.hideshow = function(){
			$scope.show  = $scope.show == 'msg1' ? 'msg2' : 'msg1'; 

		}

		dirList.setflag = function(val){

			if (val==false) {
    			document.getElementById("hide").style.display = "block";
			} else {
    			document.getElementById("hide").style.display = "none";
    			}
		}

           $http.get("http://localhost:3000/user/event_form/:user_id")
           .success(function(response){
               $scope.events=response.data;
               console.log(response.data);
          
        });

	});