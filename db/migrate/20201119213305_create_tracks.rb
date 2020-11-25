class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.integer :track_no, null: false
      t.integer :release_id, null: false

      t.timestamps
    end

    add_index :tracks, :title
    add_index :tracks, :release_id
  end
end
