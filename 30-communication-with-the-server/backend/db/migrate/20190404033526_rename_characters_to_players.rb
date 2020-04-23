class RenameCharactersToPlayers < ActiveRecord::Migration[5.2]
  def change
    rename_table :characters, :players
  end
end
