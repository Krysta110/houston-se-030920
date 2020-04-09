class BooksController < ApplicationController
    skip_before_action(:verify_authenticity_token)

    def index
        @books = Book.all
    end

    def show
        @book = Book.find(params[:id])
    end

    def new
        @book = Book.new
        @genres = Genre.all
        @authors = Author.all
    end
    
    def create
        Book.create({
            name: params[:book][:name],
            genre_id: params[:book][:genre_id],
            author_ids: params[:book][:author_ids]
        })
        redirect_to("/books")
    end

    def destroy
        @book = Book.find(params[:id])
        @book.destroy()
        redirect_to("/books")
    end

    def edit
        @book = Book.find(params[:id])
        @genres = Genre.all
        @authors = Author.all
    end

    def update
        @book = Book.find(params[:id])
        @book.update({
            name: params[:book][:name],
            genre_id: params[:book][:genre_id],
            author_ids: params[:book][:author_ids]
        })
        redirect_to("/books")
    end

end