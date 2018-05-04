app = angular.module "opendirectories.controllers"

app.controller "SavedQueriesController", [ "$scope", "GoogleSearchService", "ChromeStorage", "GoogleSearchModelService",
($scope, GoogleSearchService, ChromeStorage, GoogleSearchModelService) ->  
  $scope.deleteSavedQuery = (index) ->
    ChromeStorage.remove("savedQueries", index).then -> 
      $scope.searchModel.clearList "savedQueries"
      ChromeStorage.get("savedQueries").then (data) ->
        for item in data
          $scope.searchModel.addToList "savedQueries", item

  $scope.searchSavedQuery = (savedQuery) ->
    searchModel = GoogleSearchModelService
    searchModel.model.query        = savedQuery.query
    searchModel.model.quoted       = savedQuery.quoted
    searchModel.model.incognito    = savedQuery.incognito
    searchModel.model.alternative  = savedQuery.alternative
    for queryType,index in searchModel.model.queryTypes when queryType == savedQuery.queryType
      searchModel.model.queryType = index
    GoogleSearchService.search(searchModel.model)
]