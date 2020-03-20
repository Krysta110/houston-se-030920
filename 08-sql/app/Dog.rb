class Dog < Animal

    @@all = []

    attr_accessor(:breed, :owner, :sound, :name)
    
    def initialize(options) 
        
        self.sound=("Woof")
        self.name=(options[:name])
        self.breed=(options[:breed])
        self.owner=(options[:owner])
    
        @@all.push(self)
    end

    def self.all()
        return @@all
    end

end
