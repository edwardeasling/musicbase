@releases.each do |release|
    json.set! release.id do
        json.partial! "api/releases/release", release: release
        json.username release.artist.username
    end
end