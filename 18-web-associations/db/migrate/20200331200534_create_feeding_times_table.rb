class CreateFeedingTimesTable < ActiveRecord::Migration[5.2]
  def change
    create_table(:feeding_times) do | table |
      table.string(:label)
    end
  end
end
