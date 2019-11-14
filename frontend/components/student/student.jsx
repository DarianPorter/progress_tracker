import React from "react"
import { connect } from "react-redux"
import Navigation from "./navigation"
import Tasks from "./tasks"
import TasksVisual from "./tasks_visual"
import { changeObjectiveCurryed } from "../../actions/ui_actions"


class StudentPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            tab: 0
        }
        this.filters = [
            (objective)=>{ return !objective.finished},
            (objective)=>{ return objective.finished},
            ()=>{ return true}
        ]
    }
    setTabs(){
        let tabs = ["Incomplete", "Complete", "All"]
        return tabs.map((tab,i)=>{
            if (this.state.tab == i){
                return <p
                    style={{ background: "#0095a0"}}
                    key={i}
                    className="student-tab"
                    onClick={() => { 
                        this.props.changeObjective(0);
                        this.setState({ tab: i }); 
                    }}
                >{tab}</p>
            }else{
                return <p
                    key={i}
                    className="student-tab"
                    onClick={()=>{this.setState({tab: i})}}
                >{tab}</p>
            }
        })
    }
    getStudentsObjectiveKeys(){
        let keys = []
        Object.keys(this.props.objectives).forEach((key)=>{
            let objective = this.props.objectives[key]
            let filter = this.filters[this.state.tab]
            if(filter(objective) == true){
                keys.push(key)
            }
        })
        return keys
    }

    filterObjectives(objectives){
        let filtered = {}
        for(let key in objectives){
            let objective = objectives[key] 
            let filter = this.filters[this.state.tab]
            if (filter(objective) == true){
                filtered[objective.id] = objective
            }
        }
        return filtered
    }

    render(){
        if (!this.props.objectives){
            return (
                <div className="no-student-objectives highlight">
                    <h1> No Objectives </h1>
                </div>
            )
        }
        let keys = this.getStudentsObjectiveKeys()
        let key = keys[this.props.objectiveKey] ? (
            keys[this.props.objectiveKey]
        ) : (
            keys[0]
        )
        let objectives = this.filterObjectives(this.props.objectives)
        debugger
        return Object.keys(objectives).length != 0 ? (
            <div className="student">
                <Navigation objective={objectives[key]} objectives={objectives} />
                <div className="student-tabs">
                    <div className="tab-container">
                        {this.setTabs()}
                    </div>
                </div>        
                <div className="tasks-and-visuals">
                    <TasksVisual objective={objectives[key]} />
                    <Tasks tasks={ objectives[key].tasks }/>
                </div>
            </div>

        ) : (
           <div className="student">
                    <Navigation objective={{ name: "-------" }} objectives={{}}/>
                <div className="student-tabs">
                    <div className="tab-container">
                        {this.setTabs()}
                    </div>
                </div>  
                <h1 className="nothing" > Objectives Avaliable </h1>
           </div>
        )
    }
}   

const msp = (state) => {
    let user_id = state.session.id
    return ({
        objectives: state.entities.users[user_id].objectives,
        objectiveKey: state.ui.objectiveInd
    })
}

const mdp = (dispatch) => {
    return ({
        changeObjective: (val) => { return dispatch(changeObjectiveCurryed(val)) }
    })
}

export default connect(msp, mdp)(StudentPage)