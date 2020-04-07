class DogsController < ApplicationController

    def index
        @dogs = Dog.all 
    end

    def new
        @breeds = Breed.all 
        @feeding_times = FeedingTime.all
        render(:create_dog)
    end

    def create 
        @dog = Dog.create({
            name: params[:dog_name],
            img_url: params[:dog_image],
            breed_id: params[:dog_breed_id],
            feeding_time_ids: params[:feeding_time_ids]
        })
        redirect_to("/dogs/#{@dog.id}")
    end

    def show
        @dog = Dog.find_by({ id: params[:id] }) 
        @dog_name = @dog.name
        render(:dog_display)
    end


end





# RESTful Routes
# * Representational State Transfer
# * `/dogs/1` -> "Tess"
# * Convention
# * 7 RESTful Routes
# * CRUD Actions

# Name        # HTTP Verb   # Path            # URL Helper
# index       GET           `/dogs`           dogs_path
# new         GET           `/dogs/new`       new_dogs_path
# create      POST          `/dogs`           dogs_path
# edit        GET           `/dogs/:id/edit`  edit_dogs_path(dog)
# update      PATCH         `/dogs/:id`       dog_path(dog)
# show        GET           `/dogs/:id`
# destroy     DELETE        `/dogs/:id`
