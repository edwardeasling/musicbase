class User < ApplicationRecord
    attr_reader :password

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    after_initialize :ensure_session_token

    has_many :releases,
        class_name: "Release",
        foreign_key: "artist_id"

    has_one_attached :photo

    def self.find_by_credentials(username, password)
        # return user object if correct credentials provided
        user = User.find_by(username: username)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        # sets password digest and adds password as a temporary instance variable
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        # checks if password is correct
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        # generates a session token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        # replaces session token with newly generated token
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end

end
