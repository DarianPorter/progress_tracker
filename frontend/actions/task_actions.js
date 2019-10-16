import * as ApiUtil from "../util/tasks_util"
export const FETCH_ALL_TASKS = "FETCH_ALL_TASKS"
export const USER_EDIT_TASK = "USER_EDIT_TASK"
export const ADMIN_EDIT_TASK = "ADMIN_EDIT_TASK"
export const ADMIN_DELETE_TASK = "ADMIN_DELETE_TASK"

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

const adminDeleteTask = ()=>{
    return({
        type: ADMIN_DELETE_TASK,
    })
}   

export const thunkFetchTasks = (taskInfo)=>{
    debugger
    return (dispatch)=>{
        debugger
        return ApiUtil.fetchTasks(taskInfo).then(
            (payload)=>{
                debugger
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