class Purchase 

    @@all = []

    attr_accessor(:tshirt, :person)

    def initialize(tshirt, person)
        @tshirt = tshirt
        @person = person
        @@all.push(self)
    end

    def self.all
        return @@all
    end

end