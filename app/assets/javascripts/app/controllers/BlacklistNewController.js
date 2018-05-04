var app;

app = angular.module("opendirectories.controllers");

app.controller("BlacklistNewController", [
  "$scope", "$rootScope", "$timeout", "Topbar", "ChromeStorage", function($scope, $rootScope, $timeout, Topbar, ChromeStorage) {
    Topbar.reset();
    Topbar.linkBackTo("/settings/blacklist");
    Topbar.setTitle("Settings");
    Topbar.addSubtitle("Blacklist");
    Topbar.addSubtitle("Add new");
    $timeout((function() {
      return $(".new-blacklist input").focus();
    }), 500);
    $scope.form = {};
    $scope.formLabel = "Add";
    $scope.model = {
      url: ""
    };
    return $scope.save = function() {
      if (!$scope.form.$invalid) {
        return ChromeStorage.add("blacklist", $scope.model.url).then(function() {
          $rootScope.$broadcast("reload.chrome");
          return $scope.visit("/settings/blacklist");
        });
      }
    };
  }
]);
