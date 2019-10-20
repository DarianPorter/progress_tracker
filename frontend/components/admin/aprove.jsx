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
        let tabs = ["Submitted", "Non-Submitted", "Finished" ,"All"]
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
        return Object.keys(tasks).map((task_key, i) => {
            let task = tasks[task_key];
            return this.cb(task) ? (
                <Task key={i} task={task} students={students}/>
            ):(
                null
            )
        })
    }

    render() {
        return (
            <div>
                <div className="admin-task-tabs-container">
                    <div className="admin-task-tabs">
                        {this.setTabs()}
                    </div>
                </div>
                <ul>
                    {this.setContent()}
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