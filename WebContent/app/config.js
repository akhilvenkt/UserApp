myApp.config(['$routeProvider',
                  function($routeProvider) {
                    $routeProvider.
                      when('/dashboard', {
                        templateUrl: './app/views/dashboard.html',
                        controller: 'DashController'
                    }).
                      when('/user', {
                        templateUrl: './app/views/user.html',
                        controller: 'UserController'
                      }).
                      otherwise({
                        redirectTo: '/addOrder'
                      });
                }]);
