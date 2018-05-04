var app;

app = angular.module("opendirectories.controllers");

app.controller("QueryTypeNewController", [
  "$scope", "$rootScope", "$timeout", "Topbar", "ChromeStorage", function($scope, $rootScope, $timeout, Topbar, ChromeStorage) {
    Topbar.reset();
    Topbar.linkBackTo("/settings/queryTypes");
    Topbar.setTitle("Settings");
    Topbar.addSubtitle("Query Types");
    Topbar.addSubtitle("Add new");
    $timeout((function() {
      return $(".new-query-type input").focus();
    }), 500);
    $scope.form = {};
    $scope.formLabel = "Add";
    $scope.model = {
      name: "",
      exts: ""
    };
    return $scope.save = function() {
      if (!$scope.form.$invalid) {
        return ChromeStorage.add("queryTypes", $scope.model).then(function() {
          $rootScope.$broadcast("reload.chrome");
          return $scope.visit("/settings/queryTypes");
        });
      }
    };
  }
]);
