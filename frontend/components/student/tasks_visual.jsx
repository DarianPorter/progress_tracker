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
    createChart(){
        let chartBlocks = []
        let tasks = this.props.objective.tasks;
        let taskKeys = Object.keys(tasks)
        for (let i = 0; i < taskKeys.length; i++){
            chartBlocks.push(
                <div className="empty-block" key={i}>

                </div>
            )
        }
        return chartBlocks
    }
    render() {
        return (
            < div className="task-visuals">
                <h1>Completion Chart</h1>
                {this.completionCheck()}
                <div className="chart-container">
                    <div className="chart" >
                        {this.createChart()}
                    </div>
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