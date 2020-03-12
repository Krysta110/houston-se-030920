class Dog < Animal

    @@all = []
    
    def initialize(options)
        @@breeds = [ "Terrier", "Poodle", "Golden Retriever" ]
        self.sound = "Woof"
        self.name = options[:name]
        @@all.push(self)
        p self # The object that was initialized (specific Dog)
    end

    def bark
        puts @sound
    end

    def breed
        return @breed
    end

    def breed=(value)
        if(@@breeds.include?(value))
            @breed = value
        end
    end

    def self.breeds()
        return @@breeds
    end

    def self.all()
        return @@all
    end

end

cooper = Dog.new({ name: 'Cooper' })
sugar = Dog.new({ name: 'Sugar' })
tess = Dog.new({ name: 'Tess' })


# "Cockerspaniel"
# cooper.breed = "Cockerspaniel"