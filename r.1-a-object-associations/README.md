
### Question.rb
Initializes with a user object, string of the subject, and a string of the body
#### ~~Question#asker~~
* returns the User who asked the question
#### ~~Question#subject~~
* returns the subject of the question
#### ~~Question#body~~
* returns the body of the question
#### Questions#answers
* returns an array of answers for the question


### User.rb
Initializes with a name
#### ~~User#name~~
* returns the name of the user
#### ~~User#questions~~
* returns the questions that the user has asked
#### User#questions_asked
* returns the number of questions the user has asked
#### User#answered_questions
* returns an array of questions the user has answered


### Answer.rb

#### ~~Answer#question~~
* Returns the question this answer is responding to 
#### ~~Answer#author~~
* Returns the user who created the answer
#### Answer#question_asker
* Returns the user who asked the question this answer is responding to
#### Answer#body
* Return the content of the answer
