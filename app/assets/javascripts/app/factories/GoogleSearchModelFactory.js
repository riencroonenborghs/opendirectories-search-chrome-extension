var app;

app = angular.module("opendirectories.factories");

app.factory("GoogleSearchModelFactory", [
  "DEFAULT_SETTINGS", function(DEFAULT_SETTINGS) {
    var model;
    model = {
      query: null,
      queryTypes: $.extend([], DEFAULT_SETTINGS.QUERY_TYPES),
      queryType: 0,
      alternative: false,
      quoted: true,
      incognito: true,
      blacklist: $.extend([], DEFAULT_SETTINGS.BLACKLIST),
      savedQueries: []
    };
    return model;
  }
]);
