class AddFastModeToCharacters < ActiveRecord::Migration[5.2]
  def change
    add_column :characters, :fast_mode, :boolean
  end
end
