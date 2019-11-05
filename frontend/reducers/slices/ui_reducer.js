import { merge } from 'lodash';
import { 
    CHANGE_OBJECTIVE_INDEX,
    CHANGE_OBJECTIVE_NAME,
    PRESENT_CHANGE_OBJECTIVE,
    PRESENT_NEW_STUDENT
} from "../../actions/ui_actions"

let preLoadedState = {
    objectiveInd: 0,
    objectiveName: "Default",
    choseObjectiveModal: false,
    createNewStudentModal: false,

};////////////////

const uiReducer = (state = preLoadedState, action)=>{
    Object.freeze(state);
    let newState = null
    switch (action.type){

        case CHANGE_OBJECTIVE_INDEX:
            newState =  merge({}, state, { objectiveInd: action.val})
            return newState

        case CHANGE_OBJECTIVE_NAME:
            newState = merge({}, state, {objectiveName: action.name, choseObjectiveModal: false})    
            return newState

        case PRESENT_CHANGE_OBJECTIVE:
            newState = merge({}, state, { choseObjectiveModal: action.val})
            return newState

        case PRESENT_NEW_STUDENT:
            newState = merge({}, state, { createNewStudentModal: action.val })
            return newState

        default: 
            return state
    }
}

export default uiReducer