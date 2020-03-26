### Setup

> Terminal
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