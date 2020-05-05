class CreateTigerMovements < ActiveRecord::Migration[6.0]
  def change
    create_table :tiger_movements do |t|
      t.float :left
      t.float :down
      t.float :right 
      t.float :up
      t.float :speed 
      t.integer :tiger_id
    end
  end
end
