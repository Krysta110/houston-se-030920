class CreateDogFeedingTimesTable < ActiveRecord::Migration[5.2]
  def change
    create_table(:dog_feeding_times) do | t |
      t.integer(:dog_id)
      t.integer(:feeding_time_id)
    end
  end
end
