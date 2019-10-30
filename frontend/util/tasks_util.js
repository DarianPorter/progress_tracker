export const fetchTasks = ()=>{
    return $.ajax({
        method: "GET",
        url: `api/tasks`
    })
}

export const deleteTask = (taskInfo)=>{
    return $.ajax({
        method: "DELETE",
        url: `api/objectives/${taskInfo.objective_id}/tasks/${taskInfo.id}`
    })
}

export const updateTask = (taskInfo) =>{
    return $.ajax({
        method: "PATCH",
        url: `api/objectives/${taskInfo.objective_id}/tasks/${taskInfo.id}`,
        data: {task: taskInfo}
    })
}

export const createTask = (taskInfo)=>{
    return $.ajax({
        method: "POST",
        url: `api/objectives/${taskInfo.objective_id}/tasks`,
        data: {task: taskInfo}
    })
}