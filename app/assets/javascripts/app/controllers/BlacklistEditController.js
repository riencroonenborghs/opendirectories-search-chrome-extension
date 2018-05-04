var app;

app = angular.module("opendirectories.controllers");

app.controller("BlacklistEditController", [
  "$scope", "$rootScope", "$routeParams", "$timeout", "Topbar", "ChromeStorage", function($scope, $rootScope, $routeParams, $timeout, Topbar, ChromeStorage) {
    Topbar.reset();
    Topbar.linkBackTo("/settings/blacklist");
    Topbar.setTitle("Settings");
    Topbar.addSubtitle("Blacklist");
    Topbar.addSubtitle("Edit");
    $scope.form = {};
    $scope.formLabel = "Edit";
    $scope.model = {
      url: ""
    };
    $scope.blacklist = [];
    ChromeStorage.get("blacklist").then(function(data) {
      $scope.blacklist = data;
      return $scope.model.url = $scope.blacklist[$routeParams.index];
    });
    return $scope.save = function() {
      if (!$scope.form.$invalid) {
        $scope.blacklist[$routeParams.index] = $scope.model.url;
        return ChromeStorage.set("blacklist", $scope.blacklist).then(function() {
          $rootScope.$broadcast("reload.chrome");
          return $scope.visit("/settings/blacklist");
        });
      }
    };
  }
]);
