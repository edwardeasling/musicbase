class Release < ApplicationRecord

    validates_presence_of :title, :year, :label, :release_type, :price, :artist_id, :genre
    validates_uniqueness_of :title, :scope => :artist_id
    validates_inclusion_of :release_type, :in => %w(album ep single compilation anthology)
    validates_inclusion_of :year, :in => 1800..2050

    belongs_to :artist,
        class_name: "User",
        foreign_key: "artist_id"

    has_one_attached :photo

end
