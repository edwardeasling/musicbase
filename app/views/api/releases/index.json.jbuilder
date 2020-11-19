@releases.each do |release|
    json.set! release.id do
        json.partial! "api/releases/release", release: release
        json.username release.artist.username
        json.photoUrl url_for(release.photo) if release.photo.attached?
    end
end