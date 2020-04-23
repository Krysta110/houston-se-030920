class CreateSteps < ActiveRecord::Migration[5.2]
  def change
    create_table :steps do |t|
      t.string :direction
      t.integer :duration
      t.belongs_to :npc
      t.timestamps
    end
  end
end
