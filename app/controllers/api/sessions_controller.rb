class Api::SessionsController < ApplicationController

    def create
        @user = User.includes(objectives: [:tasks]).find_by_cred(
            session_params[:email], 
            session_params[:password]
        )
        if @user 
            login(@user)
            render 'api/users/show'
        else 
            render json: ["invalid name or password"], status: 401
        end 
    end

    def destroy 
        logout
    end 

    def session_params
        params.require(:user).permit(:email, :password)
    end 
end