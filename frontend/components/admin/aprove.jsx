import React from 'react'
import {connect} from 'react-redux'
import Task from './task'

class Aproval extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            tab: 0
        }
        this.cb = (task)=>{return task.pending}
    }

    setTabs(){
        let tab = this.state.tab
        let tabs = ["Submitted", "Non-Submitted", "Approved" ,"All"]
        let callBacks = [
            (task) => { return task.pending},
            (task) => { return (!task.pending && !task.finished)},
            (task)=>{ return task.finished},
            () => { return true},

        ]
        return tabs.map((tabName, i)=>{
            return(
                <p 
                    className={i == tab ? "selected" : "" } key={i}
                    onClick={()=>{
                        this.setState({tab: i});
                        this.cb = callBacks[i]
                    }}
                >{tabName} </p>
            )
        })  
    }

    setContent(){
        let tasks = this.props.tasks
        let students = this.props.students
        let objectives = this.props.objectives

        return Object.keys(tasks).map((task_key, i) => {
            let task = tasks[task_key];
            let objective = objectives[task.objective_id]
            let student = students[task.user_id]
            return this.cb(task) ? (
                <Task 
                    key={i} 
                    task={task} 
                    student={student} 
                    objective={objective} 
                    />
            ):(
                null
            )
        })
    }

    handleSubmit(){

    }

    render() {
        return (
            <div>
                <div className="admin-task-tabs-container">
                    <div className="admin-task-tabs">
                        {this.setTabs()}
                    </div>
                </div>
                <ul className="admin-tasks-ul">
                    {this.setContent()}
                </ul>
            </div>
        )
    }
}

const msp = (state) => {
    return ({
        tasks: state.entities.tasks,
        students: state.entities.users,
        objectives: state.entities.objectives
    })
}

const mdp = (dispatch) => {
    return ({
    
    })
}

export default connect(msp, mdp)(Aproval)