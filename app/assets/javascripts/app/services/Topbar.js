var app;

app = angular.module("opendirectories.services");

app.service("Topbar", [
  function() {
    return {
      back: null,
      title: null,
      subtitles: [],
      reset: function() {
        this.back = null;
        this.title = null;
        return this.subtitles = [];
      },
      linkBackTo: function(url) {
        return this.back = url;
      },
      setTitle: function(t) {
        return this.title = t;
      },
      addSubtitle: function(t) {
        return this.subtitles.push(t);
      }
    };
  }
]);
