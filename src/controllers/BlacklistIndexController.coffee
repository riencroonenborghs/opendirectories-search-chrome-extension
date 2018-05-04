app = angular.module "opendirectories.controllers"

app.controller "BlacklistIndexController", ["$scope", "$location", "ChromeStorage", "Topbar", "DEFAULT_SETTINGS",
($scope, $location, ChromeStorage, Topbar, DEFAULT_SETTINGS) ->
  Topbar.reset()
  Topbar.linkBackTo "/"
  Topbar.setTitle "Settings"
  Topbar.addSubtitle "Blacklist"

  $scope.blacklist = {default: $.extend([], DEFAULT_SETTINGS.BLACKLIST), storage: []}
  ChromeStorage.get("blacklist").then (data) -> $scope.blacklist.storage = data

  $scope.edit = (index) -> $location.path "/settings/blacklist/#{index}"
  $scope.delete = (index) -> 
    $scope.blacklist.storage.splice(index, 1)
    ChromeStorage.set("blacklist", $scope.blacklist.storage).then -> $rootScope.$broadcast "reload.chrome"
]