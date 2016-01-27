myApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider
/*	.when('/login',{
		templateUrl: './app/views/login.html', 
		controller: 'LoginController'
	})*/
	.when('/dashboard', {
		templateUrl : './app/views/dashboard.html',
		controller : 'DashController'
	})
	.when('/user', {
		templateUrl : './app/views/user.html',
		controller : 'UserController'
	})
	.otherwise({
		redirectTo : '/'
	});
} ]);

