class CreateSong < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.integer :album_id
      t.string :name
    end
  end
end
