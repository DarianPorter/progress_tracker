import React from 'react'
import {connect} from 'react-redux'

class AddTask extends React.Component{
    constructor(props){
        super(props)
        this.objectives = []
        this.state = {
            name: "", 
            description: "",
            dueDate: "",
            priority: ""
        }
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
    
    getAssignedTasks(){
        let objectives = this.props.objectives
        let name = this.props.objectiveName
        
        Object.keys(objective).forEach((key)=>{
            let objective = objectives[key];
            if(objective.name == name){
                this.objectives.push(objective.id)
            } 
        })
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
    
    setStateWithVal(key, e){
        this.setState({[key]: e.currentTarget.value})
    }
    
    formatDescription(){
        let formattedStr = []
        Object.keys(this.state).forEach((key)=>{
            if(key != "name"){
                formattedStr.push(this.state[key])
            }
        })
        return formattedStr.join("*")
    }

    submitNewTasks(){
        this.objectives.forEach((objective_id)=>{
            let taskInfo = {
                objective_id: objective_id,
                description: this.formatDescription(),
                taskname: this.state.name
            };
            debugger
        })
    }

    fieldsComplete(){
        let keys = Object.keys(this.state)
        for(let i = 0; i < keys.length; i++){
            let val = this.state[keys[i]]
            if (val === ""){
                return false
            }
        }
        return true 
    }

    render(){
        let studentIds = this.getStudentIds()
        let submit = this.fieldsComplete() ? (
            <button
                onClick={() => { this.submitNewTasks()}}
            > Submit </button>
        ) : (
            null
        )
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
                    <div className="task-form-name">
                        <h2> Task Name: </h2>
                        <input 
                            type="text"
                            onChange={(e)=>{this.setStateWithVal("name", e)}}
                        />
                    </div>
                    <div className="task-form-info">
                        <h2>Task Description:</h2> 
                        <textarea
                            value={this.state.description} 
                            placeholder="Task Description" 
                            onChange={(e)=>{this.setStateWithVal("description", e)}}
                        > </textarea>
                        <div className="task-form-sub-info">
                            <h2> Duedate: </h2>
                            <input 
                                type="date" 
                                onChange={(e)=>{this.setStateWithVal("dueDate", e)}}
                            />
                            <h2> Priority: </h2>
                            <input 
                                type="number" 
                                min="1" 
                                max="3" 
                                placeholder="1"
                                onChange={(e)=>{this.setStateWithVal("priority", e)}}
                            />
                        </div>
                    </div>
                    <div className="task-form-button">
                        {submit}
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