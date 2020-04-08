class FeedingTimesController < ApplicationController

    def show
        @feeding_time = FeedingTime.find_by(id: params[:id])
    end

end