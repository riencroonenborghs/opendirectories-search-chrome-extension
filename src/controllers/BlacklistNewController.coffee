app = angular.module "opendirectories.controllers"

app.controller "BlacklistNewController", ["$scope", "$rootScope", "$timeout", "Topbar", "ChromeStorage", 
($scope, $rootScope, $timeout, Topbar, ChromeStorage) ->
  Topbar.reset()
  Topbar.linkBackTo "/settings/blacklist"
  Topbar.setTitle "Settings"
  Topbar.addSubtitle "Blacklist"
  Topbar.addSubtitle "Add new"

  $timeout (-> $(".new-blacklist input").focus()), 500

  $scope.form = {}
  $scope.formLabel = "Add"

  $scope.model = {url: ""}
  $scope.save = ->
    if !$scope.form.$invalid
      ChromeStorage.add("blacklist", $scope.model.url).then -> 
        $rootScope.$broadcast "reload.chrome"
        $scope.visit "/settings/blacklist"
]