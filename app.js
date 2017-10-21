var heroApp = angular.module("heroApp", ["ui.router"]);

/*
 * Set heroes in localStorage
 */
function setHeroes(heroes){
  localStorage.setItem("heroes", JSON.stringify(heroes));
}

/*
 * Get heroes from localStorage
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
    setHeroes(heroes);
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
    }).state("detail", {
      url: "/detail/:id",
      templateUrl: "partial-hero-detail.html",
      controller: "heroDetailController"
    });
});

heroApp.controller('dashboardController', function($scope, $state) {
  $scope.heroes = getHeroes().slice(1, 5);
  $scope.search = function(){
    if($scope.heroName.trim()){
      var searchResult = getHeroes().filter(hero => 
        hero.name.toUpperCase().indexOf($scope.heroName.toUpperCase()) > -1);
      $scope.searchResult = searchResult;
    } else {
      $scope.searchResult = [];
    }
  };

  $scope.gotoDetail = function(heroId){
    $state.go("detail", { id: heroId });
  };
});

heroApp.controller('heroesController', function($scope, $state) {
  $scope.heroes = getHeroes();

  $scope.onSelect = function(hero){
    $scope.selectedHero = hero;
  };

  $scope.gotoDetail = function(){
    $state.go("detail", { id: $scope.selectedHero.id });
  };

  $scope.add = function(){
    // add hero 
    var newId = $scope.heroes
                  .map(x => x.id)                       // map heroes array to in array
                  .reduce((a, b) => Math.max(a,b)) + 1; // get the max in the int array, than add by 1
    $scope.heroes.push({id: newId, name: $scope.heroName});

    // update localStorage
    setHeroes($scope.heroes);

    // empty the textbox
    $scope.heroName = "";
  }

  $scope.delete = function(id){
    // delete hero by id
    $scope.heroes = $scope.heroes.filter(hero => hero.id !== id);

    // update localStorage
    setHeroes($scope.heroes);
  }
});

heroApp.controller('heroDetailController', function($scope, $state, $stateParams) {
  var heroArray = getHeroes().filter(x => x.id == $stateParams.id); // there should be an array with 1 hero
  if(heroArray.length == 1){
    // if $scope.hero does not exist, ng-if would show nothing
    $scope.hero = heroArray[0];
  }

  $scope.goBack = function(){
    // go back to previous page
    history.back();
  };

  $scope.save = function(){
    var heroes = getHeroes();
    for(var hero of heroes){
      if(hero.id == $scope.hero.id){
        // update the hero
        hero.name = $scope.hero.name;
        break;
      }
    }

    // update localStorage
    setHeroes(heroes);

    // go back to previous page
    history.back();
  };
});