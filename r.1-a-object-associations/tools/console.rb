require 'require_all'
require 'pry'
require_all('app')

josh = User.new("Joshua Miles")
steven = User.new("Steven Nguyen")

question_1 = Question.new(josh, "Tech", "WTF is `self`")

question_2 = Question.new(steven, "Tech", "Can you iterate over a hash?")

question_3 = Question.new(josh, "Misc. Question", "Some other question")

answer_1 = Answer.new("Some content", question_1, steven)

answer_2 = Answer.new("Some content", question_2, steven)


binding.pry
0