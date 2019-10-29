import React from 'react'
import {connect} from 'react-redux'

class AddTask extends React.Component{
    constructor(props){
        super(props)
    }

    getStudentIds(){
        let objs = this.props.objectives
        let searchName = this.props.name;
        let ids = []
        Object.keys(objs).forEach((key)=>{
            let objective = objs[key]
            if(objective.name == searchName){
                ids.push(objective.user_id)
            }
        })
        return ids
    }

    formatStudents(ids){
        if (!this.props.students){
            return false
        }
        return ids.map((id, i)=>{
            let student = this.props.students[id] ? (
                this.props.students[id]
            ) : (
                {}
            );
            return(
                <div key={i} className="student-with-objective">
                    <p className="student-select-name highlight">
                        {student.first_name + " " + student.last_name}
                    </p>
                    <p className="student-select-email"> {student.email} </p>
                    <p className="highlight"> {student.class_year} </p>
                </div>
            )
        })
    }

    render(){
        let studentIds = this.getStudentIds()
        return(
            <div className="add-task">
            
                <div className="students-task-name">
                    <div className="display-objective-name">
                        <h1> Objective Name: </h1>
                        <h1 className="highlight">{this.props.name}</h1>
                    </div>
                    <div className="underline">
                        <h2> Students </h2>
                    </div>
                    <div className="assigned-students">
                        {this.formatStudents(studentIds)}
                    </div>
                    <div className="submit-new-student">
                        <input type="text" placeholder="student name"/>
                        <button>
                            Add student
                        </button>
                    </div>
                </div>
                <div className="task-form">
                    <h1> Add Task </h1>
                    <div>
                        <h2> Task Name: </h2>
                        <input type="text"/>
                    </div>
                    <div>
                        Task Description: 
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                        Duedate: 
                        <input type="date"/>
                        Priority: 
                        <input type="number"/>
                    </div>
                </div>
            </div>
        )
    }
}

const msp = (state)=>{
    return({
        name: state.ui.objectiveName,
        students: state.entities.users,
        objectives: state.entities.objectives
    })
}
const mdp = (dispatch)=>{
    return({

    })
}

export default connect(msp, mdp)(AddTask)