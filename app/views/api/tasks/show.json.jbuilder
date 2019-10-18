# json.extract! @task, :id,  :objective_id, :taskname, :description, :finished, :pending, :url
json.partial! "api/tasks/task", task: @task 