 //modulo app e modulo ngroute
 var app = angular.module('app',['ngRoute']);
  
 //rotas 
 app.config(['$routeProvider',function($routeProvider){
  	$routeProvider.
  	when('/',{controller:'listController', templateUrl:'list.html'}).
  	when('/edit/:name',{controller:'editController',templateUrl:'form.html'}).
  	when('/new',{controller:'newController', templateUrl:'form.html'}).
  	otherwise({redirectTo:'/'});
  }]);
 
 //contexto global ao iniciar rotscope
 app.run(['$rootScope',function($rootScope){
 	$rootScope.fruits = ["banana","apple","orange"];
        $rootScope.fruits2 = [];
 	console.log('app.run');
 }]);


app.controller('listController',function ($scope,$http) {

    console.log('listController');
    
    
    
 });
 
 
 app.controller('listController2',function ($scope,$http) {
    
    $http.get("listFruits.html").success(function(data){
  			$scope.fruits2 = data.fruits;
  			console.log($scope.fruits);
 		}).error(function(data){
 			alert("Error...");
 			console.log(data);
 		}); 
                
    console.log('listController2');
 });

 
 app.controller('editController', function ($scope, $location, $routeParams) {
 	console.log('editController');
        
        $scope.title = "Editar Fruta";
        
        $scope.fruit  = $routeParams.name;
        
 	$scope.fruitIndex = $scope.fruits.indexOf($scope.fruit);
        
 	$scope.save = function(){
 		$scope.fruits[$scope.fruitIndex]=$scope.fruit;
 		$location.path('/');
 	}
 });
 
 app.controller('newController', function ($scope, $location, $routeParams ) {
     
        console.log('newController');
         
 	$scope.title = "Nova Fruta";
        
 	$scope.fruit  = "";
        
        $scope.save = function(){
 		$scope.fruits.push($scope.fruit);
 		$location.path('/');
 	}
 
 });