class Api::ObjectivesController < ApplicationController
    def index 
        @objectives = Objective.all
        render "api/objectives/index"
    end

    def create

    end

    def destroy

    end

    def objective_params 
        params.require(:objective).permit(:id, :name, :user_id, :finished)
    end
end