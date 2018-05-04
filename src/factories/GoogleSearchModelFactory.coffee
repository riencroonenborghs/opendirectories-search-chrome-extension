app = angular.module "opendirectories.factories"

app.factory "GoogleSearchModelFactory", [ "DEFAULT_SETTINGS", (DEFAULT_SETTINGS) ->
  model =
    query:        null
    queryTypes:   $.extend([], DEFAULT_SETTINGS.QUERY_TYPES)
    queryType:    0
    alternative:  false
    quoted:       true
    incognito:    true
    blacklist:    $.extend([], DEFAULT_SETTINGS.BLACKLIST)
    savedQueries: []
  model
]