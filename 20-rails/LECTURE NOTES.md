# Rails



### Learning Goals

- Create a Rails app

- Create & Run Migrations with Rails

- Use Rails to create seperate routes and controller actions


### Activation 

* Have them drive in finishing the activation code:

> How would I select the teenagers from my users?

* They will **probably** use select
* Could I solve this with `each`?
* Why not solve this with `each`?
* Because we've already taught the computer **how** to select
* `select` is an abstraction
* So. Is. Rails.
* Today we're going to explore the critical differences between Sinatra and Rails
  * 


### Learning Goal 1: Create a Rails app

##### Discuss: 

* Rails is a gem
* Rails is a framework
  * What is a framework? 
    * A tool that tells you where to put your code 
  * Rails wraps alot of the tools we've been using 
* 
  * It wraps alot of the tools we've been using so far
* How do we install gems?
* `rails new {name} --skip-git --skip-javascript`
  * Holy shit this created a lot of stuff for us
    * Still, most of it is familiar
* What `--skip-git` does
* What `--skip-javascript`



### Learning Goal 2: Create & Run Migrations with Rails

##### Discuss: 

* Now that our environment is all set up, we need to create tables for our app
* Instead of `rake db:create_migration`, we'll use `rails generate migration {name}`
  * Look at what this did for us!
  * Now you try
  * We can also define columns from the terminal!
  * Now you try!
* Instead of `rake db:migrate`, we'll run `rails db:migrate`
* Copy over the seed file
* Instead of `rake db:seed`, what do you think we'll run?



### Learning Goal 3: Use Rails to create seperated routes and controller methods

##### Discuss: 

* We'll talk more about this later: `skip_before_action(:verify_authenticity_token)`
* Now we need to create routes, controller actions, and views
* In Sinatra, our routes and controller actions were in the same place. Rails will seperate them
* So, first we'll make a route
  * Then a controller action ( `erb` turns into `render`, `redirect` turns into `redirect_to`)
    * Then copy over the view (into a folder named after the controller)
    * ...My view and controller action have the same name
    * Test with `rails server`
    * Rails will actually render the view automatically for us



### Conclusion 

- I don't want to rain Rails' parade
  - But I'm totally going to rain on Rails' parade
- Return to the activation code.
- So, this abstraction is better than `each` right?
- So, we're never going to use `each` again, right?
- No! `select` is better for **this specific** problem
- We've barely begun to scratch the surface of how Rails can abstract away certain complexities and do a lot of our work for us
  - After two more days of lectures, we'll still be scratching the surface
- But at the end of the day, Rails is still an abstraction, designed to solve **specific** problems using the tools from last week
- A HUGE part of being a good developer right now is knowing when to choose **which** tool. Sometimes the best tool for the job is going to be Rails, and sometimes it's going to be Sinatra. The same way we should sometimes use `select`, and sometimes use `each`