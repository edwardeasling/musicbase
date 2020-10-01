class RenameReleaseTypeColumn < ActiveRecord::Migration[5.2]
  def change

    remove_column :releases, :type, :string
    add_column :releases, :release_type, :string, null: false
  end
end
