import React from "react"
import Navigation from "./navigation"
import Tasks from "./tasks"
import TasksVisual from "./tasks_visual"


class StudentPage extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div className="student">
                <Navigation />
                <div className="tasks_and_visuals">
                    <TasksVisual />
                    <Tasks />
                </div>
            </div>
        )
    }
}   

export default StudentPage