class CreateTigers < ActiveRecord::Migration[6.0]
  def change
    create_table :tigers do |t|
      t.string :name
      t.float :x
      t.float :y
      t.string :img_url
    end
  end
end
