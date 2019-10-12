import React from 'react'
import Task from "./task"
import { connect } from 'react-redux'
import { thunkUserEditTask } from "../../actions/task_actions"

class Tasks extends React.Component {
    constructor(props) {
        super(props)
    }

    formatTasks(){
        let tasks = this.props.tasks
        return Object.keys(this.props.tasks).map((key, i)=>{
            return <Task task={tasks[key]} key={i}/>
        })
    }

    render() {
        return (
            <div className="tasks">
                <h1>Tasks</h1>
                <ul className="task-ul">
                    {this.formatTasks()}
                </ul>
            </div>
        )
    }
}

const msp = (state) => {
    return ({

    })
}

const mdp = (dispatch) => {
    return ({
        updateTask: ( postInfo )=>{return dispatch(thunkUserEditTask(postInfo))}
    })
}

export default connect(msp, mdp)(Tasks)