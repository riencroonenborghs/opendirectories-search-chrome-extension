app = angular.module "opendirectories.factories"

app.factory "GoogleQueryFactory", [->
  class
    constructor: (@model) ->
      @server = "https://www.google.com/"
      @path   = "search"
      return
    buildUrl: -> "#{@server}#{@path}?q=#{encodeURIComponent(@buildQuery())}"
    buildQuery: ->
      queryString = ""
      queryString = if @model.alternative then "\"parent directory\" " else "intitle:\"index.of\" "
      queryString += if @model.quoted then " \"#{@model.query}\" " else @model.query
      queryString += " -html -htm -php -asp -jsp "
      for blacklistItem in @model.blacklist
        queryString += " -" + blacklistItem
      "#{queryString}#{@buildExt()}"
    buildExt: ->
      queryType = @model.queryTypes[@model.queryType]
      if queryType.exts == "" then "" else " (#{queryType.exts.split(',').join("|")}) "
]