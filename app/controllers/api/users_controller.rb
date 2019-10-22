class Api::UsersController < ApplicationController
    def index
        @users = User.all.includes(:cohort, objectives: [:tasks])
        render :index
    end
end