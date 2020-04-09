class SongsController < ApplicationController

    def index
        @songs = Song.all
    end

    def show 
        @song = Song.find(params[:id])
    end

    def new
        # Gets the form
    end

    def create
        # Runs with the form submits
        @song = Song.create({
            name: params[:name],
            album_id: params[:album_id]
        })
        redirect_to("/songs")
    end

end