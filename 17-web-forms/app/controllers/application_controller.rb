class ApplicationController < Sinatra::Base

    set(:views, 'app/views')

    get('/list-dogs') do
        @dogs = Dog.all 
        erb(:dog_list)
    end

    # Create Dog
    get('/create-dog-forms') do 
        erb(:create_dog)
    end

    get('/create-dog') do 
        @dog = Dog.create({
            name: params[:dog_name],
            img_url: params[:dog_image]
        })
        # params[:feeding_times].each do | feeding_time |
        #     FeedingTime.create({ 
        #         time: feeding_time,
        #         dog_id: @dog.id
        #     })
        # end
        redirect("/get-dog/#{@dog.id}")
    end

    get('/get-dog/:id') do # - params[:id] ==2
        @dog = Dog.find_by({ id: params[:id] }) 
        @dog_name = @dog.name
        erb(:dog_display)
    end

end

