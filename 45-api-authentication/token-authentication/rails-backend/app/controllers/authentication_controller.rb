class AuthenticationController < ApplicationController

    def login
        passenger = Passenger.find_by({ name: params[:name]})
        if(passenger && passenger.authenticate(params[:password]))
            token = JWT.encode( { id: passenger.id }, 'asdljasldkfjs', 'HS256')
            render json: { success: true, id: passenger.id, token: token }
        else
            render json: { success: false, id: nil }
        end
    end

end