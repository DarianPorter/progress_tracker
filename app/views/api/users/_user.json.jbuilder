# debugger
# json.set! user.id do 
#     debugger
    json.extract! user, :id, :first_name, :last_name, :email, :cohort_id
    json.set! :objectives do 
        user.objectives.each do |obj|
            json.set! obj.id do 
                json.extract! obj, :id, :name, :finished 
                json.set! :tasks do 
                    obj.tasks.each do |task|
                        json.set! task.id do 
                            json.extract! task, :taskname, :description, :finished 
                        end 
                    end 
                end 
            end  
        end 
    end
# end