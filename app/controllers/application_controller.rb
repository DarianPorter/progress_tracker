class ApplicationController < ActionController::Base
    helper_method :current_user, :loggedin?
    def current_user
        @user ||= User.find_by(session_token: session[:session_token])
    end 

    def loggedin?
        !!current_user
    end

    def login(user)
        @user = user
        session[:session_token] = user.reset_token!
    end

    def logout 
        current_user.reset_token! if @user
        session[:session_token] = nil
    end 
end
