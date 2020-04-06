class CreateDogsTable < ActiveRecord::Migration[5.2]
  def change
    create_table(:dogs) do | t |
      t.string(:name)
      t.integer(:age)
      t.string(:img_url)
      t.integer(:breed_id)
    end
  end
end
