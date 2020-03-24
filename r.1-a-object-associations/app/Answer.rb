class Answer

    @@all = []

    def self.all
        return @@all
    end

    def initialize(content, question, author)
        @content = content
        @question = question
        @author = author
        @@all.push(self)
    end

    def question
        return @question
    end

    def author
        return @author
    end
end