class CreateFeedingTimes < ActiveRecord::Migration[6.0]
  def change
    create_table :feeding_times do |t|
      t.string :label
    end
  end
end
