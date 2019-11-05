class Api::UsersController < ApplicationController
    def index
        @users = User.all.includes(objectives: [:tasks])
        render 'api/users/index'
    end

    def create
        @user = User.new(user_params)
        if @user
            render 'api/users/show'
        else 
            render json: ["error"] # render errors 
        end
    end

    def user_params
        params.permit(:user).require(:first_name, :last_name, :email, :password, :class_year)
    end
end