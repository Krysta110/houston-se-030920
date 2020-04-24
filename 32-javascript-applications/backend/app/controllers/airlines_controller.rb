class AirlinesController < ApplicationController

    def index
        airlines = Airline.all
        render({ json: airlines })
    end

    def airline_tickets
        airline = Airline.find(params[:id])
        render({ json: airline.tickets })
    end

end