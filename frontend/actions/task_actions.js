import * as ApiUtil from "../util/tasks_util"
export const FETCH_ALL_TASKS = "FETCH_ALL_TASKS"
export const USER_EDIT_TASK = "USER_EDIT_TASK"
export const ADMIN_EDIT_TASK = "ADMIN_EDIT_TASK"
export const ADMIN_DELETE_TASK = "ADMIN_DELETE_TASK"
export const CREATE_TASK = "CREATE_TASK"

const fetchTasks = (tasks)=>{
    return({
        type: FETCH_ALL_TASKS,
        tasks: tasks
    })
}

const userEditTask = (task)=>{
    return({
        type: USER_EDIT_TASK,
        task: task
    })
}

const adminEditTask = (task)=>{
    return({
        type: ADMIN_EDIT_TASK,
        task: task
    })
}

const adminDeleteTask = (task)=>{
    return({
        type: ADMIN_DELETE_TASK,
        task: task 
    })
}   

const createTask =(task)=>{
    return ({
        type: CREATE_TASK,
        task: taskInfo
    })
}

export const thunkFetchTasks = (taskInfo)=>{
    return (dispatch)=>{
        return ApiUtil.fetchTasks(taskInfo).then(
            (payload)=>{
                return dispatch(fetchTasks(payload))
            }
        )
    }
}

export const thunkUserEditTask = (taskInfo)=>{
    return (dispatch)=>{
        return ApiUtil.updateTask(taskInfo).then(
            (payload)=>{
                return dispatch(userEditTask(payload))
            }
        )
    }
}

export const thunkAdminEditTask = (task)=>{
    return (dispatch)=>{
        return ApiUtil.updateTask(task).then(
            (payload)=>{
                return dispatch(adminEditTask(payload))
            }
        )
    }
}

export const thunkAdminDeleteTasks = (taskInfo)=>{
    return (dispatch)=>{
        return ApiUtil.deleteTask(taskInfo).then(
            ()=>{
                return dispatch(adminDeleteTask(taskInfo))
            }
        )
    }   
}

export const thunkCreateTask = (taskInfo)=>{
    return (dispatch)=>{
        return ApiUtil.createTask(taskInfo).then(
            (payload)=>{
                return dispatch(createTask(payload))
            }
        )
    }
}