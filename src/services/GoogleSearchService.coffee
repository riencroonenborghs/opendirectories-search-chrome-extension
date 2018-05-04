app = angular.module "opendirectories.services"

app.service "GoogleSearchService", [ "GoogleQueryFactory", (GoogleQueryFactory) ->
  service =
    search: (model) ->
      chrome.windows.create
        url: new GoogleQueryFactory(model).buildUrl(),
        incognito: model.incognito
  service
]