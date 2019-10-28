import React from 'react'
import {connect} from 'react-redux'

class AddTask extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="add-task">
            
                <div className="students-task-name">
                    <div className="display-objective-name">
                        <h1> Objective Name: </h1>
                        <h1 className="highlight">**NAME HERE</h1>
                    </div>
                    <div className="underline">
                        <h2> Students </h2>
                    </div>
                    <div className="assigned-students">

                    </div>
                    <div className="submit-new-student">
                        <input type="text" placeholder="student name"/>
                        <button>
                            Add student
                        </button>
                    </div>
                </div>
                <div className="task-form">

                </div>
            </div>
        )
    }
}

export default AddTask