class Owner < ActiveRecord::Base

    has_many(:dogs)
    has_many(:breeds, through: :dogs)

    def self.login(name) #Johnathan
        existing_owner = Owner.find_by({ name: name }) # nil
        if(existing_owner == nil) # true
            existing_owner = Owner.create({ name: name }) 
        end
        return existing_owner
    end

    def save_dog(dog_name)
        dog = Dog.create({ name: dog_name, owner_id: self.id })
    end

end