app = angular.module "opendirectories.controllers"

app.controller "QueryTypesIndexController", ["$scope", "$location", "ChromeStorage", "Topbar", "DEFAULT_SETTINGS",
($scope, $location, ChromeStorage, Topbar, DEFAULT_SETTINGS) ->
  Topbar.reset()
  Topbar.linkBackTo "/"
  Topbar.setTitle "Settings"
  Topbar.addSubtitle "Query Types"

  $scope.queryTypes = {default: $.extend([], DEFAULT_SETTINGS.QUERY_TYPES), chrome: []}
  ChromeStorage.get("queryTypes").then (data) -> $scope.queryTypes.storage = data

  $scope.edit = (index) -> $location.path "/settings/queryTypes/#{index}"
  $scope.delete = (index) -> 
    $scope.queryTypes.storage.splice(index, 1)
    ChromeStorage.set("queryTypes", $scope.queryTypes.storage).then -> $rootScope.$broadcast "reload.chrome"
]
