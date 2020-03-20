class Owner 

    def initialize(name)
        @name = name
    end

    def dogs
        result = []
        Dog.all.each do | dog |
            if(dog.owner == self)
                result.push(dog)
            end
        end
        return result
    end

    def breeds
        result = []
        Dog.all.each do | dog |
            if(dog.owner == self)
                result.push(dog.breed)
            end
        end
        return result
    end

end