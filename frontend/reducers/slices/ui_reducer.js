import { CHANGE_OBJECTIVE_INDEX } from "../../actions/ui_actions"

preLoadedState = {
    objectiveInd: 0
};

const uiReducer = (state = preLoadedState, action)=>{
    Object.freeze(state);

    switch (action.type){
        case CHANGE_OBJECTIVE_INDEX:
            return state["objectiveInd"] = action.ind;
        default: 
            return state
    }
}

export default uiReducer