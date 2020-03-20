class Breed

    attr_accessor(:name, :average_height)

    def initialize(name, average_height)
        self.name = name
        self.average_height = average_height
    end

    def dogs
        my_dogs = []
        Dog.all.each do | dog |
            if(dog.breed == self)
                my_dogs.push(dog)
            end
        end
        return my_dogs
    end

    def owners
        my_owners = []
        Dog.all.each do | dog |
            if(dog.breed == self)
                my_owners.push(dog.owner)
            end
        end
        return my_owners
    end

end