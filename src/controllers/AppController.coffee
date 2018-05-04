app = angular.module "opendirectories.controllers"

app.controller "AppController", ["$scope", "$mdSidenav", "$timeout", "$location", "GoogleSearchModelService", "Topbar", "ChromeStorage", "$rootScope", "GoogleSearchService", "GoogleQueryFactory",
($scope, $mdSidenav, $timeout, $location, GoogleSearchModelService, Topbar, ChromeStorage, $rootScope, GoogleSearchService, GoogleQueryFactory) ->
  # router loads appController again
  # don't want to set the searchModel twice (and load everything twice)
  unless $scope.searchModel
    $scope.searchModel = GoogleSearchModelService
    $scope.searchModel.loadFromChrome()
  
  $scope.Topbar = Topbar
  Topbar.reset()
  Topbar.setTitle "Opendirectories"

  $scope.$on "reload.chrome", -> $scope.searchModel.loadFromChrome()

  $scope.saveSavedQuery = ->
    item =
      queryType:    $scope.searchModel.model.queryTypes[$scope.queryType]
      query:        $scope.searchModel.model.query
      quoted:       $scope.searchModel.model.quoted
      incognito:    $scope.searchModel.model.incognito
      alternative:  $scope.searchModel.model.alternative
    ChromeStorage.add("savedQueries", item).then -> 
      $scope.searchModel.clearList "savedQueries"
      $scope.searchModel.loadFromChrome()
      $scope.openSavedQueries()
  $scope.openSavedQueries = -> $mdSidenav("savedQueries").toggle()
  $scope.closeSavedQueries = -> $mdSidenav("savedQueries").close()
  
  $scope.search = -> GoogleSearchService.search($scope.searchModel.model)
  $scope.buildQuery = -> $scope.googleQuery = new GoogleQueryFactory($scope.searchModel.model).buildQuery()
  
  $scope.visit = (url) -> $location.path url

  $timeout (-> $(".search #query").focus()), 500
]