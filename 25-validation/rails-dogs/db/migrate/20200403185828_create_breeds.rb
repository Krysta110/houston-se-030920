class CreateBreeds < ActiveRecord::Migration[6.0]
  def change
    create_table :breeds do |t|
      t.string(:name)
      t.float(:average_height)
      # t.name(:string)
    end
  end
end
