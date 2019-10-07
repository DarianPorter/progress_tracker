const CHANGE_OBJECTIVE_INDEX = "CHANGE_OBJECTIVE_INDEX"

const change_objective = (uiInfo) => {
    return({
        type: CHANGE_OBJECTIVE_INDEX,
        uiInfo: uiInfo
    })
}
const change_objective_curryed = (uiInfo)=>{
    return (dispatch)=>{
        return dispatch(change_objective(uiInfo))
    }
}

