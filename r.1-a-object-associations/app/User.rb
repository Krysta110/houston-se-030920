class User
  
    attr_reader(:name)

    def initialize(name)
        @name = name
    end

    def questions
        my_questions = Question.all.select do | question |
            question.asker == self
        end
        return my_questions
        # my_questions = []
        # Question.all.each do | question |
        #     if(question.user == self)
        #         my_questions.push(question)
        #     end
        # end
        # return my_questions
    end

    def self.my_questions
        return @@my_questions
    end

    def questions_asked
        return self.questions.count
    end

end