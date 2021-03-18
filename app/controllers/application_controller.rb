class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in?

    def login!(user)
        session[:session_token] = user.session_token
    end

    def logout!
        # Scramble the current_user's session_token
        current_user.reset_session_token!
    
        # Reset the session
        session[:session_token] = nil
    end

    def current_user
        # Check for session_token
        return nil unless session[:session_token]
    
        # Return the user associated with the session_token (if token is valid)
        @current_user ||= User.find_by_session_token(session[:session_token])
    end

    def logged_in?
        !current_user.nil?
    end
end
