var app;

app = angular.module("opendirectories.services");

app.service("GoogleSearchService", [
  "GoogleQueryFactory", function(GoogleQueryFactory) {
    var service;
    service = {
      search: function(model) {
        return chrome.windows.create({
          url: new GoogleQueryFactory(model).buildUrl(),
          incognito: model.incognito
        });
      }
    };
    return service;
  }
]);
