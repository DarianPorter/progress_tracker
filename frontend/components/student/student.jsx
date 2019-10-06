import React from "react"
import { connect } from "react-redux"
import Navigation from "./navigation"
import Tasks from "./tasks"
import TasksVisual from "./tasks_visual"


class StudentPage extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div className="student">
                <Navigation objective={this.props.objectives[2]} />
                <div className="tasks_and_visuals">
                    <TasksVisual objective={this.props.objectives[2]} />
                    <Tasks tasks={this.props.objectives[2].tasks}/>
                </div>
            </div>
        )
    }
}   

const msp = (state) => {
    let user_id = state.session.id
    return ({
        objectives: state.entities.users[user_id].objectives,
    })
}

const mdp = (dispatch) => {
    return ({

    })
}

export default connect(msp)(StudentPage)