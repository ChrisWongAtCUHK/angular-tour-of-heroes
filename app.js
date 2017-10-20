var heroApp = angular.module("heroApp", ["ui.router"]);

/*
 * Merge the dummy data with localStorage
 */
function getHeroes(){
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

  var heroesLs = localStorage.getItem("heroes");
  if(!heroesLs){
    localStorage.setItem("heroes", JSON.stringify(heroes));
  } else {
    return JSON.parse(heroesLs);
  }

  return heroes;
}

heroApp.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/dashboard");

  $stateProvider
    .state("dashboard", {
      url: "/dashboard",
      templateUrl: "partial-dashboard.html",
      controller: "dashboardController"
    }).state("heroes", {
      url: "/heroes",
      templateUrl: "partial-heroes.html",
      controller: "heroesController"
    });
});

heroApp.controller('dashboardController', function($scope) {
  $scope.heroes = getHeroes().slice(1, 5);
});

heroApp.controller('heroesController', function($scope) {
  $scope.heroes = getHeroes();

  $scope.delete = function(id){
    // delete hero by id
    $scope.heroes = $scope.heroes.filter(hero => hero.id !== id);

    // update localStorage
    localStorage.setItem("heroes", JSON.stringify($scope.heroes));
  }
});