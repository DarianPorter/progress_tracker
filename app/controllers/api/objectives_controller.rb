class Api::ObjectivesController < ApplicationController
    def index 
        @objectives = Objective.all
        render "api/objectives/index"
    end

    def create
        @objective = Objective.new(objective_params)
        if @objective
            render 'api/objectives/show'
        else 
            render json: ["Missing Info in Feilds(s)"], status: 401
        end 
    end

    def destroy
        @objective = Objective.find(params[:id])
        @objective.tasks.destroy_all
        @objective.destroy
        render json: ["successfuly deleted"], status: 200

    end

    def objective_params 
        params.require(:objective).permit(:id, :name, :user_id, :finished)
    end
end