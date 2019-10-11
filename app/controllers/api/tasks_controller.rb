class Api::TaskController < ApplicationController
    def update
       @task = Task.find(task_params[:id])
       @task.update(task_params)
       render 'api/tasks/show'
    end 

    def index
        @tasks = Task.includes(:objective).all
        render 'api/tasks/index'
    end 

    def destroy 
        @task = Task.find(task_params[:id])
        @task.destroy
    end

    def task_params 
        params.require(:task).permit(:id, :taskname, :description, :finished, :objective_id, :pending)
    end 
end
