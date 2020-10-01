class CreateReleases < ActiveRecord::Migration[5.2]
  def change
    create_table :releases do |t|
      t.string :title, null: false
      t.integer :year, null: false
      t.string :label, null: false
      t.string :type, null: false
      t.integer :price, null: false
      t.integer :artist_id, null: false

      t.timestamps
    end

    add_index :releases, :title
    add_index :releases, :artist_id
  end
end
