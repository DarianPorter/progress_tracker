import React from 'react'
import { connect } from 'react-redux'

class TasksVisuals extends React.Component {
    constructor(props) {
        super(props)
    }
    completionCheck() {
        return this.props.objective.finished ?
            (
                <div className="complete">
                    <i className="far fa-check-circle"></i>
                    <p>Complete</p>
                </div>
            ) : (
                <div className="incomplete">
                    <i className="far fa-times-circle"></i>
                    <p>Incomplete</p>
                </div>
            )
    }
    render() {
        return (
            < div className="task-visuals">
                <h1>Completion Chart</h1>
                {this.completionCheck()}
                <div className="circle-chart">
                    
                </div>
            </ div>
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

export default connect(msp, mdp)(TasksVisuals)