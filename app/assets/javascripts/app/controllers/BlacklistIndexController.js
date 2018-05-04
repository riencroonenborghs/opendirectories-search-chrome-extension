var app;

app = angular.module("opendirectories.controllers");

app.controller("BlacklistIndexController", [
  "$scope", "$location", "ChromeStorage", "Topbar", "DEFAULT_SETTINGS", function($scope, $location, ChromeStorage, Topbar, DEFAULT_SETTINGS) {
    Topbar.reset();
    Topbar.linkBackTo("/");
    Topbar.setTitle("Settings");
    Topbar.addSubtitle("Blacklist");
    $scope.blacklist = {
      "default": $.extend([], DEFAULT_SETTINGS.BLACKLIST),
      storage: []
    };
    ChromeStorage.get("blacklist").then(function(data) {
      return $scope.blacklist.storage = data;
    });
    $scope.edit = function(index) {
      return $location.path("/settings/blacklist/" + index);
    };
    return $scope["delete"] = function(index) {
      $scope.blacklist.storage.splice(index, 1);
      return ChromeStorage.set("blacklist", $scope.blacklist.storage).then(function() {
        return $rootScope.$broadcast("reload.chrome");
      });
    };
  }
]);
