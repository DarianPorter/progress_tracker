import React from 'react'
import {connect} from 'react-redux'
import Pending from './aproval_tabs/pending'

class Aproval extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            tab: 0
        }
        // debugger
    }

    pendingTasks(){
        
    }

    notPendingTasks(){

    }

    allTasks(){

    }


    render() {
        let content;
        let tab = this.state.tab

        if (tab == 0){
            content = <Pending
                tasks={this.props.tasks}
                students={this.props.students}
            />
        } else if (tab == 1){
            content = this.notPendingTasks()
        }else{
            content = this.allTasks()
        }

        return (
            <div>
                <div className="admin-task-tabs-container">
                    <div className="admin-task-tabs">
                        <p>Pending Tasks</p>
                        <p>Non-Pending Tasks</p>    
                        <p>All Tasks </p>
                    </div>
                </div>
                <ul>
                    
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