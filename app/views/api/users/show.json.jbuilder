json.set! @user.id do
    json.partial! "api/users/user", user: @user
    json.photoUrl url_for(@user.photo) if @user.photo.attached?
end