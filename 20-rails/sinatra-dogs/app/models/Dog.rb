class Dog < ActiveRecord::Base

   
    belongs_to(:breed)
    has_many(:dog_feeding_times)
    
    has_many(:feeding_times, through: :dog_feeding_times)


end