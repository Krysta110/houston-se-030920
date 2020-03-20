# SELECT breeds.* FROM breeds 
# JOIN dogs ON  breeds.id = dogs.breed_id
# JOIN owners ON dogs.owner_id = owner.id

class Owner

    def breeds
        results = []
        Dog.all.each do | dog |
            if(dog.owner == self) # JOIN owners ON dogs.owner_id = owner.id
                results.push(dog.breed) # JOIN dogs ON  breeds.id = dogs.breed_id
            end
        end 
        return results
    end

end