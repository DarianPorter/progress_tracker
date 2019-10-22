class Api::ObjectivesController < ApplicationController
    def index 
        @objectives = Objective.all
        render "api/objectives/index"
    end

    def create
        @objective = Objective.new(objective_params)
        if
            render 'api/show/index'
        else 
            render json: ["Missing Info in Feilds(s)"], status: 401
        end 
    end

    def destroy
        @objective = Objective.find(params[:id])
    end

    def objective_params 
        params.require(:objective).permit(:id, :name, :user_id, :finished)
    end
end