angular.module('routes', [])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
    .when('/', {
      templateUrl: '/views/home.html',
      controller: 'FirstController'
    })
    .when('/page1', {
      templateUrl: '/views/page1.html',
      controller: 'FirstController'
    })
    .when('/page2', {
      templateUrl: '/views/page2.html',
      controller: 'FirstController'
    })
    .when('/page3', {
      templateUrl: '/views/page3.html',
      controller: 'FirstController'
    })
    .otherwise({
      redirectTo: '/'
    });
  }]);
