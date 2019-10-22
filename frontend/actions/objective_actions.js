import * as ApiUtil from "../util/objective_util"

export const FETCH_ALL_OBJECTIVES = "FETCH_ALL_OBJECTIVES"

const fetchObjectives = (objectives)=>{
    return({
        type: FETCH_ALL_OBJECTIVES, 
        objectives: objectives
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