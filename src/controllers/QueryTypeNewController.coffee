app = angular.module "opendirectories.controllers"

app.controller "QueryTypeNewController", ["$scope", "$rootScope", "$timeout", "Topbar", "ChromeStorage", 
($scope, $rootScope, $timeout, Topbar, ChromeStorage) ->
  Topbar.reset()
  Topbar.linkBackTo "/settings/queryTypes"
  Topbar.setTitle "Settings"
  Topbar.addSubtitle "Query Types"
  Topbar.addSubtitle "Add new"

  $timeout (-> $(".new-query-type input").focus()), 500

  $scope.form = {}
  $scope.formLabel = "Add"

  $scope.model = {name: "", exts: ""}
  $scope.save = ->
    if !$scope.form.$invalid
      ChromeStorage.add("queryTypes", $scope.model).then -> 
        $rootScope.$broadcast "reload.chrome"
        $scope.visit "/settings/queryTypes"
]