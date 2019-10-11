class Api::UsersController < ApplicationController
    def index
        @users = User.all.includes(objectives: [:tasks])
        render :index
    end
end