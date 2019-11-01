import React from 'react'
import { handleChange } from "../../util/component_util"
import { connect } from "react-redux"
import { thunkUserEditTask } from "../../actions/task_actions"
import { merge } from 'lodash'

 class Task extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        url: this.props.task.url,
        pending: this.props.task.finished
        }
    }
    
    formatDescription(description){
        let prioritys = ["High", "Med", "Low"]
        let parts = description.split("*")
        if(parts.length == 1){
            return description
        }
        let style = {
            color: ""
        }
        switch(parseInt(parts[2])){
            case 3:
                style.color = "rgb(0,200,0)"
                break;
            case 2:
                style.color = "yellow"
                break;
            case 1:
                style.color = "red"
                break

        }
        return( <>
            <p>{parts[0]}</p>
            <div className="priority-due-date">
                <p>Due on: <span className="highlight">{ parts[1] }</span></p>
                <p>Priority: <span style={style}>{ prioritys[parts[2] - 1] }</span></p>
            </div>
        </>)
    }

    addUrl(e){
        let taskUpdate = merge({}, this.props.task)
        taskUpdate["url"] = this.state.url
        this.props.updateTask(taskUpdate)
        e.currentTarget.parentElement.firstElementChild.value = ""
    }

    sendTask(){
        if (this.state.pending == false){
            let taskUpdate = merge({}, this.props.task)
            taskUpdate["pending"] = true 
            this.props.updateTask(taskUpdate)
        }
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
                <button onClick={()=>{ this.sendTask() }}>
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
            return (
                <p className="no-work-link">
                    Submit link to work
                </p>
            )
        }
    }
    render(){
        let task = this.props.task
        return (
            <li className="task-li">
    
                <div className="task-header">
                    {task.finished == true ? (
                        <i className="far fa-check-circle"></i>
                    ) : (
                            <i className="far fa-times-circle"></i>
                        )}
                    <h3>{task.taskname}</h3>
                </div>
    
                <div className="description-and-submit">
                    <div className="task-description">
                        {this.formatDescription(task.description)}
                    </div>
                    {this.handleButton(task)}
    
                </div>
                {task.finished ? (
                    null
                ) : (
                        <div className="link-edit">
                            {this.linkToWork(task)}
                            <div className="edit-work-link">
                                <input type="text" /*value={this.state.url}*/ onChange={(e) => {return handleChange(this, e, "url") }} />
                                <button onClick={(e) => { this.addUrl(e)} }> Submit URL </button>
                            </div>
                        </div>
                    )}
            </li>
        )
    }
}

const msp = (state) => {
    return ({

    })
}

const mdp = (dispatch) => {
    return ({
        updateTask: (postInfo) => { return dispatch(thunkUserEditTask(postInfo)) }
    })
}

export default connect(msp, mdp)(Task)