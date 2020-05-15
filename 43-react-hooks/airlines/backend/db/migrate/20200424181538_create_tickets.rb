class CreateTickets < ActiveRecord::Migration[6.0]
  def change
    create_table :tickets do |t|
      t.integer :airline_id
      t.string :destination
      t.string :starting_point
      t.string :seat_number
      t.datetime :date
      t.float :price

      t.timestamps
    end
  end
end
