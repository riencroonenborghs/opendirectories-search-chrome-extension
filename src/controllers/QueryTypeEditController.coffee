app = angular.module "opendirectories.controllers"

app.controller "QueryTypeEditController", ["$scope", "$rootScope", "$routeParams", "$timeout", "Topbar", "ChromeStorage",
($scope, $rootScope, $routeParams, $timeout, Topbar, ChromeStorage) ->
  Topbar.reset()
  Topbar.linkBackTo "/settings/queryTypes"
  Topbar.setTitle "Settings"
  Topbar.addSubtitle "Query Types"
  Topbar.addSubtitle "Edit"

  $scope.form = {}
  $scope.formLabel = "Edit"

  $scope.model = {name: "", exts: ""}
  $scope.queryTypes = []
  ChromeStorage.get("queryTypes").then (data) ->
    $scope.queryTypes = data
    $scope.model = $scope.queryTypes[$routeParams.index]

  $scope.save = ->
    if !$scope.form.$invalid   
      $scope.queryTypes[$routeParams.index] = $scope.model
      ChromeStorage.set("queryTypes", $scope.queryTypes).then ->
        $rootScope.$broadcast "reload.chrome"
        $scope.visit "/settings/queryTypes"
]