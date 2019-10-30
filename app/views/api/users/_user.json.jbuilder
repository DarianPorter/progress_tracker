json.extract! user, :id, :first_name, :last_name, :email, :cohort_id, :is_admin
json.class_year user.cohort.year
json.set! :objectives do 
    user.objectives.each do |obj|
        obj.is_complete?
        json.set! obj.id do 
            json.partial! "api/objectives/objective.json.jbuilder", objective: obj
            json.set! :tasks do 
                obj.tasks.each do |task|
                    json.set! task.id do 
                        json.partial! "api/tasks/task.json.jbuilder", task: task
                    end 
                end 
            end 
        end  
    end 
end
