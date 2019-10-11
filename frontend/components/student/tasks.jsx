import React from 'react'
import { connect } from 'react-redux'

class Tasks extends React.Component {
    constructor(props) {
        super(props)
    }

    handleButton(task){
        return task.finished == true ? (
            null
        ) : (
            task.pending == true ? (
                <button style={{cursor: "not-allowed", background: "grey"}} >
                    Pending....
                </button>
            ) : (
                <button>
                    Submit to TA
                </button>
            )
        )
    }

    linkToWork(task){
        if(task.url){
            return(
                <a href={task.url} className="work-link" target="_blank"> 
                    Link to work
                </a>
            )
        }else{
            return null
        }
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

                    <div className="description-and-submit">
                        <p className="task-description">{ tasks[key].description }</p>
                        {this.handleButton(tasks[key])}
                    
                    </div>
                    <div className="link-edit">
                        {this.linkToWork(tasks[key])}
                        <div>
                            <input type="text"/>
                            <button> Submit URL</button>
                        </div>
                    </div>
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