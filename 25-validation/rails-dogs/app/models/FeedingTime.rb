class FeedingTime < ActiveRecord::Base

    has_many(:dog_feeding_times)
    has_many(:dogs, through: :dog_feeding_times)


end