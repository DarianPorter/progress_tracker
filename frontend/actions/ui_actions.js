export const CHANGE_OBJECTIVE_INDEX = "CHANGE_OBJECTIVE_INDEX"

const changeObjective = (val) => {
    return({
        type: CHANGE_OBJECTIVE_INDEX,
        val: val
    })
}

export const changeObjectiveCurryed = (val)=>{
    return (dispatch)=>{
        return dispatch(changeObjective(val))
    }
}

