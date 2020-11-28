class Track < ApplicationRecord

    validates_presence_of :title, :track_no, :release_id
    validates_uniqueness_of :track_no, :scope => :release_id
    validates_inclusion_of :track_no, :in => 1..50

    belongs_to :release,
        class_name: "Release",
        foreign_key: "release_id"

    has_one_attached :song,
        :dependent => :destroy
end
