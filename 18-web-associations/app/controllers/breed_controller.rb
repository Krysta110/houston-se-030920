class BreedController < Sinatra::Base

    set(:views, 'app/views')

    get('/get-breed/:id') do 
        @breed = Breed.find(params[:id])
        erb(:breed_display)
    end

end

