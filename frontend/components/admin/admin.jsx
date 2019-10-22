import React from 'react'
import { connect } from 'react-redux'
import Navigation from "./navigation"
import { thunkFetchStudents } from "../../actions/user_actions"
import { thunkFetchTasks } from "../../actions/task_actions"
import { thunkFetchObjectives } from "../../actions/objective_actions"

class Admin extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchUsers();
        this.props.fetchTasks();
        this.props.fetchObjectives();
    }

    render(){
        return(
            <div className="admin">
                <Navigation />
            </div>
        )
    }
}

const msp = (state)=>{
    return({
    })
}

const mdp = (dispatch)=>{
    return({
        fetchUsers: () => { return dispatch(thunkFetchStudents())},
        fetchTasks: () => { return dispatch(thunkFetchTasks())},
        fetchObjectives: () => { return dispatch(thunkFetchObjectives())}
    })
}

export default connect(msp, mdp)(Admin)