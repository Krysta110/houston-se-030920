# Automated Testing



### Learning Goals

- Set up rspec in an ActiveRecord Project

- Write a unit test using RSpec

- Define different software testing approaches 


### Activation 

##### Time: 0:00

Finish save method

Show how it broke login

If we had tests, they would have caught this for us



### Learning Goal 1: Set up rspec in an ActiveRecord Project

##### Time: 0:20

##### Demonstrate 

`rspec --init`



> Spec_helper.rb

```
ENV['ACTIVE_RECORD_ENV'] = 'test'

require_relative('../config/environment.rb')

require_relative('../db/schema.rb')
```



> environment.rb

```
if(ENV["ACTIVE_RECORD_ENV"] == "test")
  ActiveRecord::Base.logger = nil
  ActiveRecord::Base.establish_connection(
    adapter: 'sqlite3',
    database: ":memory:"
  )
else
  ActiveRecord::Base.establish_connection(
    adapter: 'sqlite3',
    database: "db/development.sqlite"
  )
end
```





### Learning Goal 2: Write a unit test using RSpec

##### Time: 0:20

##### Demonstrate 

* 



### Learning Goal 3: Define Test Driven Development

##### Time: 0:20

##### Demonstrate 

* 