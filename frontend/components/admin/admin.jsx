import React from 'react'
import { connect } from 'react-redux'
import Navigation from "./navigation"
import { thunkFetchStudents } from "../../actions/user_actions"

class Admin extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchUsers();
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
        fetchUsers: () => { return dispatch(thunkFetchStudents())}
    })
}

export default connect(msp, mdp)(Admin)