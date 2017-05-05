class CreateListings < ActiveRecord::Migration[5.0]
  def change
    create_table :listings do |t|
      t.integer :user_id, null: false, index: true
      t.string :name, null: false, index: true
      t.string :brand, null: false, index: true
      t.string :description
      t.integer :price
      t.boolean :sold, default: false

      t.timestamps
    end
  end
end
