# SQL
### Structure Query Language

* Make a Table
    * Columns and Rows
    * Contain different pieces of info
    * Kind of like Excel

* SQL Commands
    * Straight Forward
    * `SELECT * FROM dogs`
    * Kind of like Excel

* Ruby Data Structures: Arrays, Object
    * `@@all` array of objects -> table 
    * of objects -> row
    * which each contain instance variables 

### Ruby to SQL
Table bears                 ->  Bear.all []
Row: [ 'Mr. Chocolate', 16] ->  #<Bear @name="Mr.Chocolate" @age=16>
Column: name TEXT           ->  @name = 'Mr. Chocolate'


* Schema
    * The shape of your data
    * Your tables and columns

* id
    * Unique value for each row
    * also known as a primary key

* foreign keys 
    * a link to another row's primary key
    * not necessarily unique
    * probably to a different table

* Users
    * id PK
    * name TEXT
    * age INTEGER
    * parent_id INTEGER
