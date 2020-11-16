class AddGenreToReleases < ActiveRecord::Migration[5.2]
  def change
    add_column :releases, :genre, :string, :default => 'rock', null: false
  end
end
