class Dog < Animal
    
    attr_accessor(:sound, :name)

    def initialize(options) # { name: 'Cooper' }
        self.sound = "Woof"
        self.name = options[:name] # Cooper
    end

    def bark
        puts @sound
    end

end
