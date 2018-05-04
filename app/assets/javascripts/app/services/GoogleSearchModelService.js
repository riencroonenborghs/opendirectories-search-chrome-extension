var app;

app = angular.module("opendirectories.services");

app.service("GoogleSearchModelService", [
  "GoogleSearchModelFactory", "ChromeStorage", function(GoogleSearchModelFactory, ChromeStorage) {
    var service;
    service = {
      model: GoogleSearchModelFactory,
      addToList: function(type, item) {
        return this.model[type].push(item);
      },
      clearList: function(type) {
        return this.model[type] = [];
      },
      loadFromChrome: function(key) {
        if (key == null) {
          key = null;
        }
        if (key) {
          return this.loadKeyFromChrome(key);
        } else {
          this.loadKeyFromChrome("blacklist");
          this.loadKeyFromChrome("queryTypes");
          return this.loadKeyFromChrome("savedQueries");
        }
      },
      loadKeyFromChrome: function(key) {
        return ChromeStorage.get(key).then((function(_this) {
          return function(data) {
            var i, item, len, results;
            results = [];
            for (i = 0, len = data.length; i < len; i++) {
              item = data[i];
              results.push(_this.addToList(key, item));
            }
            return results;
          };
        })(this));
      }
    };
    return service;
  }
]);
