var app;

app = angular.module("opendirectories.controllers");

app.controller("QueryTypeEditController", [
  "$scope", "$rootScope", "$routeParams", "$timeout", "Topbar", "ChromeStorage", function($scope, $rootScope, $routeParams, $timeout, Topbar, ChromeStorage) {
    Topbar.reset();
    Topbar.linkBackTo("/settings/queryTypes");
    Topbar.setTitle("Settings");
    Topbar.addSubtitle("Query Types");
    Topbar.addSubtitle("Edit");
    $scope.form = {};
    $scope.formLabel = "Edit";
    $scope.model = {
      name: "",
      exts: ""
    };
    $scope.queryTypes = [];
    ChromeStorage.get("queryTypes").then(function(data) {
      $scope.queryTypes = data;
      return $scope.model = $scope.queryTypes[$routeParams.index];
    });
    return $scope.save = function() {
      if (!$scope.form.$invalid) {
        $scope.queryTypes[$routeParams.index] = $scope.model;
        return ChromeStorage.set("queryTypes", $scope.queryTypes).then(function() {
          $rootScope.$broadcast("reload.chrome");
          return $scope.visit("/settings/queryTypes");
        });
      }
    };
  }
]);
