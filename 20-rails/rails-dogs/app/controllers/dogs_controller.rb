class DogsController < ApplicationController

    def index
        @dogs = Dog.all 
    end

    def create_dog_forms
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
        redirect_to("/get-dog/#{@dog.id}")
    end

    def view_dog
        @dog = Dog.find_by({ id: params[:id] }) 
        @dog_name = @dog.name
        render(:dog_display)
    end


end