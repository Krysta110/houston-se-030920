class Question

    @@all = []

    def initialize(asker, subject, body)
        @asker = asker
        @subject = subject
        @body = body
        @@all.push(self)
    end

    def asker
        return @asker
    end

    def subject
        return @subject
    end

    def body
        return @body
    end

    def self.all
        return @@all
    end

    def answers
        return Answer.all.select do | answer | 
            answer.question == self
        end
    end

    # Should return an array of users who have answered
    # This question
    def responders
        # Answer.all.select do | answer |
        #     answer.question == self
        # end
        return self.answers.map do | answer |
            answer.author
        end
        # responders = []
        # Answer.all.each do | answer |
        #    if(answer.question == self)
        #     responders.push(answer.author)
        #    end
        # end
        # return responders
    end

end