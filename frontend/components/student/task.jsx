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

    addUrl(){
        let taskUpdate = merge({}, this.props.task)
        taskUpdate["url"] = this.state.url
        thunkUserEditTask(taskUpdate)
    }

    sendTask(){
        if (this.state.pending == false){
            let taskUpdate = merge({}, this.props.task)
            taskUpdate["pending"] = true 
            thunkUserEditTask(taskUpdate)
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
                <p>
                
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
                    <p className="task-description">{task.description}</p>
                    {this.handleButton(task)}
    
                </div>
                {task.finished ? (
                    null
                ) : (
                        <div className="link-edit">
                            {this.linkToWork(task)}
                            <div className="edit-work-link">
                                <input type="text" /*value={this.state.url}*/ onChange={(e) => {return handleChange(this, e, "url") }} />
                                <button onClick={ ()=>{this.makeChange()} }> Submit URL </button>
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