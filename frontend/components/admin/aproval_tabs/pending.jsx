import React from 'react'

const Pending = (props)=>{
    if (!props.tasks) {return null} 

    let tasks = props.tasks
    let students = props.students
    return Object.keys(tasks).map((task_key, i) => {
        let task = tasks[task_key];
        return (
            <div className="admin-task" key={i}>
                <div className="task-display-top">
                    <h2> *Objective Name -----*</h2>
                    <b />
                    <h1>{task.taskname}</h1>
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
                <button>
                    Aprove
                    </button>
                <i className="fas fa-trash-alt"></i>
            </div>
        )
    })
}

export default Pending