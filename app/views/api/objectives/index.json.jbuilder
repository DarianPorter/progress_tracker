@objectives.each do |obj|
    json.set! obj.id do 
        json.partial! "api/objectives/objective", objective: obj
    end 
end