import React from 'react'
import { connect } from 'react-redux'

class Tasks extends React.Component {
    constructor(props) {
        super(props)
    }

    formatTasks(){
        let tasks = this.props.tasks
        return Object.keys(this.props.tasks).map((key, i)=>{
            return (
                <li className="task-li" key={i}>
                    <div className="task-header">
                        {tasks[key].finished == true ? (
                            <i className="far fa-check-circle"></i>
                        ) : ( 
                            <i className="far fa-times-circle"></i>
                        )}
                        <h3>{ tasks[key].taskname }</h3>
                    </div>
                    <p className="task-description">{ tasks[key].description }</p>
                </li>
            )
        })
    }

    render() {
        return (
            <div className="tasks">
                <h1>Tasks</h1>
                <ul className="task-ul">
                    {this.formatTasks()}
                </ul>
            </div>
        )
    }
}

const msp = () => {
    return ({

    })
}

const mdp = () => {
    return ({

    })
}

export default connect(msp, mdp)(Tasks)