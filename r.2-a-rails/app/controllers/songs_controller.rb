class SongsController < ApplicationController

    def index
        @songs = Song.all
    end

    def show 
        @song = Song.find(params[:id])
    end

    def new
        # Gets the form
        @song = Song.new()
        @albums = Album.all
    end

    def create
        # Runs with the form submits
        @song = Song.create({
            name: params[:song][:name],
            album_id: params[:song][:album_id]
        })
        redirect_to("/songs")
    end

    def edit
        @song = Song.find(params[:id])
        @albums = Album.all
    end

    def update
        @song = Song.find(params[:id])
        @song.update({
            name: params[:song][:name],
            album_id: params[:song][:album_id]
        })
        redirect_to("/songs/#{@song.id}")
    end

    def destroy
        @song = Song.find(params[:id])
        @song.destroy()
        redirect_to("/songs")
    end

end