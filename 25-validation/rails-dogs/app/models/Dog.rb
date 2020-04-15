class Dog < ActiveRecord::Base

    belongs_to(:user)
    belongs_to(:breed)
    has_many(:dog_feeding_times)
    has_many(:feeding_times, through: :dog_feeding_times)

    validate(:check_feeding_times, :check_name)
    
    def check_feeding_times
        if(self.feeding_times.length <= 0)
            self.errors.add(:feeding_times, 'must be selected')
         end
    end

    def check_name
        if(self.name == nil )
            self.errors.add(:name, 'must be provided')
        end
    end

end