class Api::TasksController < ApplicationController
    def update
        @task = Task.find(task_params[:id])
        @task.update!(task_params)
        @task.objective.is_complete?
       render 'api/tasks/show'
    end 

    def index
        @tasks = Task.includes(:objective).all
        render 'api/tasks/index'
    end 

    def destroy 
        @task = Task.find(params[:id])
        @task.destroy
        render 'api/tasks/show'
    end

    def task_params 
        params.require(:task).permit(:id, :taskname, :description, :finished, :objective_id, :pending, :url)
    end 
end
