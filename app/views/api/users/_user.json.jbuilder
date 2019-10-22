json.extract! user, :id, :first_name, :last_name, :email, :cohort_id, :is_admin
json.set! :objectives do 
    user.objectives.each do |obj|
        json.set! obj.id do 
            # json.extract! obj, :id, :name, :finished 
            json.partial! "api/objectives/objective.json.jbuilder", objective: obj
            json.set! :tasks do 
                obj.tasks.each do |task|
                    json.set! task.id do 
                        # json.extract! task, :taskname, :description, :finished, :pending, :url
                        json.partial! "api/tasks/task.json.jbuilder", task: task
                    end 
                end 
            end 
        end  
    end 
end
