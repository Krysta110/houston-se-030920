class CreateBook < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.string :name
      t.integer :genre_id
    end
  end
end
