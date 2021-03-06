import React from 'react'
import { connect } from 'react-redux'

class TasksVisuals extends React.Component {
    constructor(props) {
        super(props)
    }

    outOfTotal() {
        let tasks = this.props.objective.tasks ? (
            this.props.objective.tasks
        ):(
            {}
        );
        let keys = Object.keys(tasks);
        let complete = 0;
        for (let i = 0; i < keys.length; i++) {
            if (tasks[keys[i]].finished == true) {
                complete++;
            }
        }
        return complete 
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
        let tasks = null
        if(this.props.objective.tasks){
            tasks = this.props.objective.tasks
        }else{
            return <div className="empty-block" style={{height: "80%"}}>

            </div>
        }
        let taskKeys = Object.keys(tasks)
        let tasksCompleted = this.outOfTotal();

        for (let i = taskKeys.length - 1; i >= 0; i--){
            let styles = {
                height: `${80 / taskKeys.length}%`,
                top: `${i * (80 / taskKeys.length)}%`
            }

            if(tasksCompleted === taskKeys.length){
                styles["background"] = "rgb(0, 200, 0)"
            }else if (tasksCompleted != 0){
                styles["background"] = "#0095a0";
                tasksCompleted--;
            }

            chartBlocks.push(
                <div className="empty-block" key={i} style={styles}>

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