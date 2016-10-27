angular.module('App', [
	'ngRoute',
	'routes',
	'navCtrl',
  'firstCtrl'
])
.controller('NavController', function($scope, $rootScope, $location, $route){
	$scope.$on('$routeChangeSuccess', function(){
		$rootScope.activePath = $location.path();
	});
})
