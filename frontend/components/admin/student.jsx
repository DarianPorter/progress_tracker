import React from 'react'

const Student = (props)=>{
    let student = props.student
    let student_name = student.first_name + " " + student.last_name

    let tasksCompletes = ()=>{
        if (!student.objectives) { return <span> 0/0</span> }

        let objectiveKeys = Object.keys(student.objectives);
        let totalTasks = 0;
        let amountOfFinished = 0;

        for (let i = 0; i < objectiveKeys.length; i++) {
            let objective = student.objectives[objectiveKeys[i]];
            let taskKeys = Object.keys(objective.tasks);
            for(let j = 0; j < taskKeys.length; j++){
                let task = objective.tasks[taskKeys[i]];
                totalTasks += 1;
                if(task.finished == true){
                    amountOfFinished += 1
                }
            }
        }
        return totalTasks == amountOfFinished ? ( 
            <span style={{ color: "rgb(0,200,00)" }}>
                {` ${amountOfFinished}/${totalTasks}`}
            </span>
        ) : (
            <span style={{ color: "rgb(218, 79, 59)"}}>
                {` ${amountOfFinished}/${totalTasks}`}                 
            </span>
        )
    }

    let objectivesComplete = ()=>{
        if (!student.objectives) {return <span> 0/0</span>}

        let objectiveKeys = Object.keys(student.objectives);
        let amountOfFinished = 0;

        for(let i = 0; i < objectiveKeys.length; i++){
            let objective = student.objectives[objectiveKeys[i]];
            if(objective.finished == true){
                amountOfFinished += 1
            }
        }

        return objectiveKeys.length == amountOfFinished ? (
            <span style={{color: "rgb(0,200,00)"}} >
                {" " + amountOfFinished + "/" + objectiveKeys.length}
            </span>
        ) : (
            <span style={{ color: "rgb(218, 79, 59)"}}>
                {" " + amountOfFinished + "/" + objectiveKeys.length}
            </span>
        )
    }

    return(
        <div className="student-strip">
            <p className="highlight name"> {student_name} </p>
            <a 
                className="email"
                href={`mailto:${student.email}?subject=Incomplete Work`}
            > {student.email} </a>
            <p>
                Objectives complete
                {objectivesComplete()}
            </p>
            <p>
                Tasks complete
                {tasksCompletes()}
            </p>
            <p className="highlight year">{student.class_year}</p>
        </div>
    )
}

export default Student