class DogsController < ApplicationController

    def index
        @dogs = Dog.all 
    end

    def show
        @dog = Dog.find_by({ id: params[:id] }) 
        @dog_name = @dog.name
    end

    def new 
        @dog = Dog.new
        @breeds = Breed.all 
        @feeding_times = FeedingTime.all
    end

    def create 
        @dog = Dog.create({
            name: params[:dog][:name],
            img_url: params[:dog][:img_url],
            breed_id: params[:dog][:breed_id],
            feeding_time_ids: params[:dog][:feeding_time_ids]
        })
        redirect_to("/dogs/#{@dog.id}")
    end

    def edit 
        @dog = Dog.find(params[:id])
        @breeds = Breed.all 
        @feeding_times = FeedingTime.all
    end

    def update 
        @dog = Dog.find(params[:id])
        @dog.update({
            name: params[:dog][:name],
            img_url: params[:dog][:img_url],
            breed_id: params[:dog][:breed_id],
            feeding_time_ids: params[:dog][:feeding_time_ids]
        })
        redirect_to("/dogs/#{@dog.id}")
    end

    def destroy
        @dog = Dog.find(params[:id])
        @dog.destroy()
        redirect_to("/dogs")
    end

end