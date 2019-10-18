import React from 'react'
import {connect} from 'react-redux'

class Aproval extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            tab: "pending"
        }
    }

    pendingTasks(){
        let tasks = this.props.tasks 
        let students = this.props.students
        return Object.keys(tasks).map((task_key, i)=>{
            let task = tasks[task_key];
            return(
                <div className="admin-task" key={i}>
                    <div className="task-display-top">
                        <b> *Objective Name -----*</b>
                        <p>{task.taskname}</p>
                    </div>
                    <div className="task-display-bottom">
                        {students[task.user_id] ? (
                            <p>{students[task.user_id].first_name + " " + students[task.user_id].last_name}</p>
                        ) : (
                            null
                        )}
                        { task.url ? (
                            <a href={task.url} target="_blank"> Link to Work </a>
                        ) : (
                            <p> Did not Submit link</p>
                        )}
                    </div>
                    <button>
                        Aprove
                    </button>
                    <i className="fas fa-trash-alt"></i>

                </div>
            )
        })
    }

    notPendingTasks(){

    }

    allTasks(){

    }


    render() {
        let content;
        let tab = this.state.tab

        if (tab == "pending"){
            content = this.pendingTasks();
        } else if (tab == "notPending"){
            content = this.notPendingTasks()
        }else{
            content = this.allTasks()
        }

        return (
            <div>
                <div className="admin-task-tabs">
                    <p>
                        pending tasks
                    </p>
                    <p>
                        non-pending tasks
                    </p>    
                    <p>
                        all tasks 
                    </p>
                </div>
                <ul>
                    {content}
                </ul>
            </div>
        )
    }
}

const msp = (state) => {
    return ({
        tasks: state.entities.tasks,
        students: state.entities.users
    })
}

const mdp = (dispatch) => {
    return ({

    })
}

export default connect(msp, mdp)(Aproval)