import { merge } from 'lodash';
import { CHANGE_OBJECTIVE_INDEX } from "../../actions/ui_actions"

let preLoadedState = {
    objectiveInd: 0,
    objectiveName: "Testing Task Creation"
};

const uiReducer = (state = preLoadedState, action)=>{
    Object.freeze(state);

    switch (action.type){
        case CHANGE_OBJECTIVE_INDEX:
            let newState =  merge({}, state, { objectiveInd: action.val})
            return newState
        default: 
            return state
    }
}

export default uiReducer