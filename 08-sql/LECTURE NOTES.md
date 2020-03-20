# Intro to SQL

##### Time: 1:30

##### FormativeEducation Deck: <https://formative.education/projects/12/edit>


### Learning Goals

* Define SQL and Schema
* Use Foreign Keys to Associate Table Rows
* Access a SQL database from Ruby


### Activation

* Demo a test app. Our data doesnt persist...
* Once we persist our data it's going to stack up
* When our data stacks up **performance matters**
* Tracing the time complexity of a simple ruby process



### Learning Goal 1: Manipulate and retrieve data with SQL

##### Timestamp: 0:15

##### Demonstrate
* SQL 
  - A language for querying data (Structured Query Language)
* Query
  - A question
* A SQL database is a tool that helps us ask questions about our data
* DB Browser for SQLite
* Schema
  * The shape of our data
  * array -> table, object -> row, instance variable -> column

##### Vocabulary
* Database
  * A tool for persisting data
  * A tool for querying data
* Schema
  * Describes the structure of your data
* Table
  * A collection of things with a common schema
* Row
  * A single thing (instance) inside the table
* Column
  * Describes what should be in a specific part of a row
* SELECT
  - SQL command for getting data from a database

##### Questions 





### Learning Goal 2: Use Foreign Keys to Associate Rows

##### Timestamp: 0:35

##### Demonstrate

- We use IDs to track rows in SQL
- We can also use them to build relationships

##### Vocabulary

- Primary Key
  - The ID of a row
- Foreign Key
  - A column with the ID of another row

##### Questions 



> Break



### Learning Goal 3: Access a SQL database from Ruby

##### Timestamp: 0:65

##### Demonstrate

- `sqlite3` gem
- `results_as_hash`
- `execute`
- Use `'; DELETE FROM dogs WHERE true OR name='`to delete all dogs
- Play this: https://youtu.be/D05AB8xs7qA?t=30
- Bobby Drops tables

##### Vocabulary

- SQL injection

##### Questions 