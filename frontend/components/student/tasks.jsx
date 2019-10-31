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
        let formattedTasks = this.formatTasks();
        let tasks = formattedTasks.length ? (
            formattedTasks
        ):(
            <h1> No Assigned Tasks </h1>
        )

        return (
            <div className="tasks">
                <h1>Tasks</h1>
                <ul className="task-ul">
                    {tasks}
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