# Object Properties

**Time: 1:15** 

**FormativeEducation Deck:** <https://formative.education/projects/6/edit>



### Learning Goals

* Describe the `self` keyword

* Create getters and setters

* Use access macros


### Activation

##### Time: 0:00

* What if I wanted to reference the animals full name *inside* of their bark method?
* The same way `@` let's us access an objects variables, the `self` keyword allows us to reference an objects functions
* This is going to have really interesting implications for how we interact with our objects



### Learning Goal 1: Describe the `self` keyword

##### Time: 0:10

##### Demonstrate

- Using the `self` keyword to bring full_name into bark
- different objects have different `self`'s
- infinite chaining

##### Vocabulary

- `self`

##### Questions 



### Learning Goal 2: Create getters and setters

##### Time: 0:30

##### Demonstrate

- Creating a `getter` for first_name
- Creating a `setter` for first_name
- Together we will call these a **property**

##### Vocabulary

- `getter` method
- `setter` method
- `property`

##### Questions 



### Learning Goal 3: Use access macros

##### Time: 0:45

##### Demonstrate

- How `attr_reader` can replace `getters`
- How `attr_writer` can replace `setters`
- How `attr_accessor` can replace both
- DONT USE THESE RIGHT AWAY
- They are not always the best tool for the job

##### Vocabulary

- `attr_reader`
- `attr_writer`
- `attr_accessor`

##### Questions 



### Some Final Thoughts

##### Time: 1:00

* Is it better to reference a value using an instance variable or it's getter method?

* <https://github.com/rubocop-hq/ruby-style-guide/issues/538>