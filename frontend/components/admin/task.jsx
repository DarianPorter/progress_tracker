import React from 'react'
import {merge} from 'lodash'
import { connect } from 'react-redux'
import { thunkAdminEditTask, thunkAdminDeleteTasks } from '../../actions/task_actions'

const Task = (props)=>{
    if (!props.task) {return null} 
    
    let objective = props.objective ? props.objective : {}; 
    let task = props.task ? props.task : {};
    let student = props.student ? props.student : {}; 
    let studentName = student ? (student.first_name + " " + student.last_name) : ("")
    let handleSubmit = ()=>{ 
        task.finished = true 
        task.pending = false;
        props.aproveTask(task)
    }

    return (
        <div className="admin-task">
            <div className="task-display-top">
                {task.finished ? (
                    <i className="far fa-check-circle"></i>
                ) : (
                    <i className="far fa-times-circle"></i>
                )}
                <div>
                    <h2> {objective.name} </h2>
                    <b />
                    <h1 className="highlight"> {task.taskname} </h1>
                </div>
            </div>
            <div className="task-display-bottom">
                {student ? (
                    <p> Student name: <span className="highlight"> {studentName} </span> </p>
                ) : (
                        null
                    )}
                {task.url ? (
                    <a href={task.url} target="_blank"> Link to Work </a>
                ) : (
                        <p style={{ color: "#da4f3b" }}> Did not Submit link</p>
                    )}
            </div>
            {task.finished ? (
                <div className="task-aproved">
                    Aproved
                </div>
            ) : (
                    <button className="admin-task-button" onClick={() => { handleSubmit()}}>
                    Aprove
                </button>
            )}
            <i onClick={()=>{ props.deleteTask(props.task) }} className="fas fa-trash-alt"></i>
        </div>
    )
}

const msp = (state) =>{
    return({

    })
}
const mdp = (dispatch) => {
    return ({
        aproveTask: (task) => { dispatch(thunkAdminEditTask(task)) },
        deleteTask: (task) => { dispatch(thunkAdminDeleteTasks(task)) }
    })
}

export default connect(msp,mdp)(Task)