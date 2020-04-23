class CharactersController < ApplicationController

    def get_character_data
        render json: Player.find(1)
    end

    def update_character_data
        character = Player.find(1)
        character.update(params.permit(:name, :x, :y, :fast_mode ))
        render json: character
    end

    def log 
        puts "===================================="
        puts params[:message]
        puts "===================================="
        render json: { message: "Nice Job. :)" }
    end

end
