import React from 'react'

const Task = (props)=>{
    if (!props.task) {return null} 

    let task = props.task
    let students = props.students
    return (
        <div className="admin-task">
            <div className="task-display-top">
                {task.finished ? (
                    <i className="far fa-check-circle"></i>
                ) : (
                    <i className="far fa-times-circle"></i>
                )}
                <div>
                    <h2> *Objective Name -----*</h2>
                    <b />
                    <h1>{task.taskname}</h1>
                </div>
            </div>
            <div className="task-display-bottom">
                {students[task.user_id] ? (
                    <p> Student name: {students[task.user_id].first_name + " " + students[task.user_id].last_name}</p>
                ) : (
                        null
                    )}
                {task.url ? (
                    <a href={task.url} target="_blank"> Link to Work </a>
                ) : (
                        <p style={{ color: "red" }}> Did not Submit link</p>
                    )}
            </div>
            {task.finished ? (
                <div className="task-aproved">
                    Aproved
                </div>
            ) : (
                <button className="admin-task-button">
                    Aprove
                </button>
            )}
            <i className="fas fa-trash-alt"></i>
        </div>
    )
}

export default Task