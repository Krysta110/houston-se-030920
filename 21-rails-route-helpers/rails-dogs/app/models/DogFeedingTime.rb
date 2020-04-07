class DogFeedingTime < ActiveRecord::Base
    
    belongs_to(:dog)
    belongs_to(:feeding_time)

end