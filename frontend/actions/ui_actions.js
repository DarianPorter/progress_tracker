export const CHANGE_OBJECTIVE_INDEX = "CHANGE_OBJECTIVE_INDEX"
export const PRESENT_CHANGE_OBJECTIVE = "PRESENT_CHANGE_OBJECTIVE"
export const CHANGE_OBJECTIVE_NAME = "CHANGE_OBJECTIVE_NAME"
export const PRESENT_NEW_STUDENT = "PRESENT_NEW_STUDENT"

const changeObjective = (val) => {
    return({
        type: CHANGE_OBJECTIVE_INDEX,
        val: val
    })
}

const presentChangeObjective = (val)=>{
    return({
        type: PRESENT_CHANGE_OBJECTIVE,
        val: val
    })
}

const presentNewStudent = (val)=>{
    return({
        type: PRESENT_CHANGE_OBJECTIVE,
        val: val
    })
}

const changeObjectiveName = (objectiveName)=>{
    return({
        type: CHANGE_OBJECTIVE_NAME,
        name: objectiveName
    })
}

export const changeObjectiveCurryed = (val)=>{
    return (dispatch)=>{
        return dispatch(changeObjective(val))
    }
}

export const thunkChangeObjective =(objective)=>{
    return (dispatch)=>{
        return dispatch(changeObjectiveName(objective))
    }
}

export const thunkPresentChangeObjective = (val)=>{
    return (dispatch)=>{
        return dispatch(presentChangeObjective(val))
    }
}

export const thunkPresentNewStudent = (val) =>{
    return (dispatch)=>{
        return dispatch(presentNewStudent(val))
    }
}

