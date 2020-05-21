# Authentication


### PREVIOUSLY ON FLATIRON AUTH

- BCrypt
    - Hashes Our Passwords
    - When you hash it you cant go back
    - Obscures the users password 
    - Protects users passwords in the event of a data breach
- Sessions & Cookies
    - Storing data
    - Remembering who is logged in
    - Cookies store data in the browser
- Single Page Applications
    - now we communicate with the server using fetch
    - Should we still be using the session and cookies to remember whose logged in?


### Types of Attacks
* Cross Site Scripting
    * Adding malicious code to an application (through a form input or something)
    * Thereby running code on someone elses app
* Cross Site Request Forgery
    * Tricks the user into doing something in your app that they didn't mean to do


### Reasons to not use Sessions with APIs 
* ~~It won't work~~
    * Cookies don't work on fetch requests
    * (It just takes configuration)
* ~~Horizontal Scalability (the problem of server statelessness)~~
    * I could be logged in on one server but not another
    * (Cookies allow the server to be stateless)
* ~~Cross Site Request Forgery~~
    * This was valid
    * (The `same-site` cookie setting can gaurd against these attacks today)


### Takeaways
* Authentication is complicated
* There is a lot of misinformation
* Think from the perspective of the hacker