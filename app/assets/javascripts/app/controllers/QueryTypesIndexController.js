var app;

app = angular.module("opendirectories.controllers");

app.controller("QueryTypesIndexController", [
  "$scope", "$location", "ChromeStorage", "Topbar", "DEFAULT_SETTINGS", function($scope, $location, ChromeStorage, Topbar, DEFAULT_SETTINGS) {
    Topbar.reset();
    Topbar.linkBackTo("/");
    Topbar.setTitle("Settings");
    Topbar.addSubtitle("Query Types");
    $scope.queryTypes = {
      "default": $.extend([], DEFAULT_SETTINGS.QUERY_TYPES),
      chrome: []
    };
    ChromeStorage.get("queryTypes").then(function(data) {
      return $scope.queryTypes.storage = data;
    });
    $scope.edit = function(index) {
      return $location.path("/settings/queryTypes/" + index);
    };
    return $scope["delete"] = function(index) {
      $scope.queryTypes.storage.splice(index, 1);
      return ChromeStorage.set("queryTypes", $scope.queryTypes.storage).then(function() {
        return $rootScope.$broadcast("reload.chrome");
      });
    };
  }
]);
