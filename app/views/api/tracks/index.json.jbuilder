@tracks.each do |track|
    json.set! track.id do
        json.partial! "api/tracks/track", track: track
        json.songUrl url_for(track.song) if track.song.attached?
    end
end