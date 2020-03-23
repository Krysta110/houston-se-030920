# Intro to ActiveRecord


### Resources
* https://create.kahoot.it/share/intro-to-activerecord/2e202ffe-b427-44b8-bc65-614d07e66be3



### Learning Goals

* Recognize the components of a conventional ActiveRecord environment
* Use ActiveRecord migrations to create and update a data schema
* Use ActiveRecord models to manipulate data



### Activation

* Demonstrate building a mini ORM
* If we kept adding features and kept adding features and kept adding features, we would be able to do everything we need to do with SQL, using plain ruby code
  * That's what ActiveRecord is, a set of tools that let us write ruby, and writes SQL for us in the background



### Learning Goal 1: Recognize the components of a conventional ActiveRecord environment

##### Timestamp: 0:05

##### Demonstrate
* The Gemfile
* Rake
  * rake -T
* The Environment File
* What is ActiveRecord?

##### Vocabulary
* Gemfile
* Rake
* ActiveRecord

##### Questions 



### Learning Goal 2: Use ActiveRecord migrations to create and update a data schema

##### Timestamp: 0:20

##### Demonstrate

- db:create_migration
- db:migrate:status
- Migration syntax
  - Name only matters in as much as it matches the file
  - type first, then column name
  - If I change the name of table, should the code still work?
- db:migrate

##### Vocabulary

- Migration

##### Questions 



### Learning Goal 3: Use ActiveRecord models to perform basic CRUD operations

##### Timestamp: 0:35

##### Demonstrate

- ".create"
- ".find"
- ".where"
- ".update"
- ".destroy"

##### Vocabulary

- Model
- Keyword Arguments

##### Questions 




### Conclusion 
* What about relationships?