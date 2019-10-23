import React from 'react'
import {connect} from 'react-redux'
import Task from './task'

class Aproval extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            tab: 0
        }
        this.callBacks = [
            (task) => { return task.pending},
            (task) => { return (!task.pending && !task.finished)},
            (task)=>{ return task.finished},
            () => { return true},
        ]
    }

    setTabs(){
        let tab = this.state.tab
        let tabs = ["Submitted", "Non-Submitted", "Approved" ,"All"]
        return tabs.map((tabName, i)=>{
            return(
                <p 
                    className={i == tab ? "selected" : "" } key={i}
                    onClick={()=>{
                        this.setState({tab: i});
                        // this.cb = callBacks[i]
                    }}
                >{tabName} </p>
            )
        })  
    }

    setContent(){   
        return Object.keys(tasks).map((task_key, i) => {
            let task = tasks[task_key];
            let objective = objectives[task.objective_id]
            let student = students[task.user_id]
            return this.callBacks[this.state.tab](task) ? (
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