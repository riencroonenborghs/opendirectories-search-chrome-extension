app = angular.module "opendirectories.services"

app.service "Topbar", [ ->
  back:     null
  title:    null
  subtitles: []
  reset: ->
    @back = null
    @title = null
    @subtitles = []
  linkBackTo: (url) -> @back = url
  setTitle: (t) -> @title = t
  addSubtitle: (t) -> @subtitles.push t
]