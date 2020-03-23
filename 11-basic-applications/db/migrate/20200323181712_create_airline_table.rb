class CreateAirlineTable < ActiveRecord::Migration[5.2]
  def change
    create_table(:airlines) do | airline |
      airline.string(:name)
      
    end
  end
end
