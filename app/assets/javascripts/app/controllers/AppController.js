var app;

app = angular.module("opendirectories.controllers");

app.controller("AppController", [
  "$scope", "$mdSidenav", "$timeout", "$location", "GoogleSearchModelService", "Topbar", "ChromeStorage", "$rootScope", "GoogleSearchService", "GoogleQueryFactory", function($scope, $mdSidenav, $timeout, $location, GoogleSearchModelService, Topbar, ChromeStorage, $rootScope, GoogleSearchService, GoogleQueryFactory) {
    if (!$scope.searchModel) {
      $scope.searchModel = GoogleSearchModelService;
      $scope.searchModel.loadFromChrome();
    }
    $scope.Topbar = Topbar;
    Topbar.reset();
    Topbar.setTitle("Opendirectories");
    $scope.$on("reload.chrome", function() {
      return $scope.searchModel.loadFromChrome();
    });
    $scope.saveSavedQuery = function() {
      var item;
      item = {
        queryType: $scope.searchModel.model.queryTypes[$scope.queryType],
        query: $scope.searchModel.model.query,
        quoted: $scope.searchModel.model.quoted,
        incognito: $scope.searchModel.model.incognito,
        alternative: $scope.searchModel.model.alternative
      };
      return ChromeStorage.add("savedQueries", item).then(function() {
        $scope.searchModel.clearList("savedQueries");
        $scope.searchModel.loadFromChrome();
        return $scope.openSavedQueries();
      });
    };
    $scope.openSavedQueries = function() {
      return $mdSidenav("savedQueries").toggle();
    };
    $scope.closeSavedQueries = function() {
      return $mdSidenav("savedQueries").close();
    };
    $scope.search = function() {
      return GoogleSearchService.search($scope.searchModel.model);
    };
    $scope.buildQuery = function() {
      return $scope.googleQuery = new GoogleQueryFactory($scope.searchModel.model).buildQuery();
    };
    $scope.visit = function(url) {
      return $location.path(url);
    };
    return $timeout((function() {
      return $(".search #query").focus();
    }), 500);
  }
]);
