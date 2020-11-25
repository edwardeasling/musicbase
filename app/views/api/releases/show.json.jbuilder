json.set! @release.id do
    json.partial! "api/releases/release", release: @release
    json.photoUrl url_for(@release.photo) if @release.photo.attached?
end