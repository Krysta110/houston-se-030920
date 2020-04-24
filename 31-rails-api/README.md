# Vocabulary

* CORS
    * Cross Origin Resource Sharing
    * Disabled by Default   
        * By default, the browser will not fetch to any api that is not at the same origin
    * But, can be enabled by header provided by the server
        * In Rails we set this header by uncommenting `cors.rb` and `rack-cors` in the Gemfile
        * And by changing the origin to `*` in `cors.rb`