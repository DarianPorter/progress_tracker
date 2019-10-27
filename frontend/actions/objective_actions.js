import * as ApiUtil from "../util/objective_util"

export const FETCH_ALL_OBJECTIVES = "FETCH_ALL_OBJECTIVES"
export const DELETE_OBJECTIVE = "DELETE_OBJECTIVE"
export const CREATE_OBJECTIVE = "CREATE_OBJECTIVE"


const fetchObjectives = (objectives)=>{
    return({
        type: FETCH_ALL_OBJECTIVES, 
        objectives: objectives
    })
}

const deleteObjective = (objective)=>{
    return({
        type: DELETE_OBJECTIVE,
        objective: objective
    })
}

const createObjective = (objective)=>{
    return ({
        type: CREATE_OBJECTIVE,
        objective: objective
    })
}

export const thunkFetchObjectives =()=>{
    return (dispatch)=>{
        return ApiUtil.fetchObjectives().then(
            (payload)=>{
                return dispatch(fetchObjectives(payload))
            }
        )
    }
}