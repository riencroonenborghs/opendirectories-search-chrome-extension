var app;

app = angular.module("opendirectories.controllers");

app.controller("SavedQueriesController", [
  "$scope", "GoogleSearchService", "ChromeStorage", "GoogleSearchModelService", function($scope, GoogleSearchService, ChromeStorage, GoogleSearchModelService) {
    $scope.deleteSavedQuery = function(index) {
      return ChromeStorage.remove("savedQueries", index).then(function() {
        $scope.searchModel.clearList("savedQueries");
        return ChromeStorage.get("savedQueries").then(function(data) {
          var i, item, len, results;
          results = [];
          for (i = 0, len = data.length; i < len; i++) {
            item = data[i];
            results.push($scope.searchModel.addToList("savedQueries", item));
          }
          return results;
        });
      });
    };
    return $scope.searchSavedQuery = function(savedQuery) {
      var i, index, len, queryType, ref, searchModel;
      searchModel = GoogleSearchModelService;
      searchModel.model.query = savedQuery.query;
      searchModel.model.quoted = savedQuery.quoted;
      searchModel.model.incognito = savedQuery.incognito;
      searchModel.model.alternative = savedQuery.alternative;
      ref = searchModel.model.queryTypes;
      for (index = i = 0, len = ref.length; i < len; index = ++i) {
        queryType = ref[index];
        if (queryType === savedQuery.queryType) {
          searchModel.model.queryType = index;
        }
      }
      return GoogleSearchService.search(searchModel.model);
    };
  }
]);
