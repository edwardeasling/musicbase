class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in?

    def login!(user)
    # set the session_token for the connection to the user's session token
        session[:session_token] = user.session_token
    end

    def logout!
    # reset user's session token and remove session token from connection
        current_user.reset_session_token!
        session[:session_token] = nil
    end

    def current_user
    # returns user object if connection session token matches a user session token
        return nil unless session[:session_token]
        @current_user ||= User.find_by_session_token(session[:session_token])
    end

    def logged_in?
    # returns true if a user is logged in
        !!current_user
    end

end
