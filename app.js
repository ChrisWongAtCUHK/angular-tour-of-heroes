var heroApp = angular.module("heroApp", ["ui.router"]);

// dummy data, if there is data in localStorage, merge them
const heroes = [
  { id: 0,  name: 'Zero' },
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

heroApp.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/dashboard");

  $stateProvider
    .state("dashboard", {
      url: "/dashboard",
      templateUrl: "partial-dashboard.html",
      controller: "dashboardController"
    });
});

heroApp.controller('dashboardController', function($scope) {
  $scope.heroes = heroes.slice(1, 5);
});

