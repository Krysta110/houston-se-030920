class UsersController < ApplicationController 

    skip_before_action(:check_login, only: [ :view_login, :handle_login ])

    def view_login
        render(:login)
    end

    def handle_login
        user = User.find_by({ username: params[:username] })
        if(user.authenticate(params[:password]))
            session[:user_id] = user.id
            redirect_to('/dogs')
        else
            p "Login Failed"
        end
    end

end