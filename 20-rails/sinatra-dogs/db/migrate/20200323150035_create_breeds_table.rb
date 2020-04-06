class CreateBreedsTable < ActiveRecord::Migration[5.2]
  def change
    create_table(:breeds) do | t |
      t.string(:name)
      t.float(:average_height)
      # t.name(:string)
    end
  end
end
