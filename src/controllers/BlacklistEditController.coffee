app = angular.module "opendirectories.controllers"

app.controller "BlacklistEditController", ["$scope", "$rootScope", "$routeParams", "$timeout", "Topbar", "ChromeStorage",
($scope, $rootScope, $routeParams, $timeout, Topbar, ChromeStorage) ->
  Topbar.reset()
  Topbar.linkBackTo "/settings/blacklist"
  Topbar.setTitle "Settings"
  Topbar.addSubtitle "Blacklist"
  Topbar.addSubtitle "Edit"

  $scope.form = {}
  $scope.formLabel = "Edit"

  $scope.model = {url: ""}
  $scope.blacklist = []
  ChromeStorage.get("blacklist").then (data) ->
    $scope.blacklist = data
    $scope.model.url = $scope.blacklist[$routeParams.index]

  $scope.save = ->
    if !$scope.form.$invalid 
      $scope.blacklist[$routeParams.index] = $scope.model.url
      ChromeStorage.set("blacklist", $scope.blacklist).then ->
        $rootScope.$broadcast "reload.chrome"
        $scope.visit "/settings/blacklist"
]