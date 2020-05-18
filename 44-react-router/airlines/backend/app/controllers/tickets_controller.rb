class TicketsController < ApplicationController

    def create
        ticket = Ticket.create({
            airline_id: params[:airline_id],
            destination: params[:destination],
            starting_point: params[:starting_point],
            seat_number: params[:seat_number],
            date: params[:date],
            price: params[:price]
        })
        render({ json: ticket })
    end


end