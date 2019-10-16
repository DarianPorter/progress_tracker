export const fetchTasks = (taskInfo)=>{
    return $.ajax({
        method: "GET",
        url: `api/objectives/${taskInfo.objective_id}/tasks`
    })
}

export const deleteTask = (taskInfo)=>{
    return $.ajax({
        method: "DELETE",
        url: `api/objectives/${taskInfo.objective_id}/tasks/${taskInfo.id}`
    })
}

export const updateTask = (taskInfo) =>{
    debugger
    return $.ajax({
        method: "PATCH",
        url: `api/objectives/${taskInfo.objective_id}/tasks/${taskInfo.id}`,
        data: {task: taskInfo}
    })
}