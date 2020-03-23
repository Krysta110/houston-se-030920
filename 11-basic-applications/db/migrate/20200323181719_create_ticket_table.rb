class CreateTicketTable < ActiveRecord::Migration[5.2]
  def change
    create_table(:tickets) do | ticket |
      ticket.string(:number)
      ticket.integer(:airline_id)
      ticket.integer(:passenger_id)
      ticket.string(:seat_number)
      ticket.string(:departure_city)
      ticket.string(:destination_city)
      ticket.datetime(:departure_time)
      ticket.datetime(:arrival_time)
      ticket.float(:price)
    end
  end
end
