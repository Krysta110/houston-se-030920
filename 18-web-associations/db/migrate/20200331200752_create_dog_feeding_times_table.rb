class CreateDogFeedingTimesTable < ActiveRecord::Migration[5.2]
  def change
    create_table(:dog_feeding_times) do | table |
      table.integer(:dog_id)
      table.integer(:feeding_time_id)
    end
  end
end
