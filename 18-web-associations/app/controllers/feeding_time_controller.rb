class FeedingTimeController < Sinatra::Base

    set(:views, 'app/views')

    get('/feeding-roster/:label') do 
        @feeding_time = FeedingTime.find_by(label: params[:label])
        erb(:feeding_time_display)
    end

end

