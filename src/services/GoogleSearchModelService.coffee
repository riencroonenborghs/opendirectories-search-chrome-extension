app = angular.module "opendirectories.services"

app.service "GoogleSearchModelService", [ "GoogleSearchModelFactory", "ChromeStorage", (GoogleSearchModelFactory, ChromeStorage) ->
  service =
    model: GoogleSearchModelFactory
    addToList: (type, item) ->
      @model[type].push item
    clearList: (type) ->
      @model[type] = []
    # load all from chrome storage (blacklist, query types, saved queries)
    loadFromChrome: (key = null) ->
      # chrome.storage.local.clear()
      if key
        @loadKeyFromChrome key
      else
        @loadKeyFromChrome "blacklist"
        @loadKeyFromChrome "queryTypes"
        @loadKeyFromChrome "savedQueries"
    loadKeyFromChrome: (key) ->
      ChromeStorage.get(key).then (data) =>
        for item in data
          @addToList key, item
  service
]