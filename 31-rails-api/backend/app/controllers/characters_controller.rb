class CharactersController < ApplicationController

    def get_json
        ruby_hash = {
            message: 'I am a simple hash'
        }
        render(json: ruby_hash )
    end

    def character_data
        character = Character.all[0]
        render({ json: character, include: [ :items ] })
    end

    def save_character_data
        character = Character.all[0]
        character.update({
            x: params[:x], 
            y: params[:y]
        })
        render({ json: character })
    end

end