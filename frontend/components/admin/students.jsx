import React from 'react'
import {connect} from 'react-redux'
import Student from './student'

class Cohort extends React.Component {
    constructor(props){
        super(props)
    }

    setUp(){
        let students = this.props.students
        return Object.keys(students).map((key, i)=>{
            let student = students[key];
            if (!student.is_admin){
                return <Student student={student} key={i} />
            }
        })
    }

    render(){
        return(
            <div className="student-slices" >
                {this.setUp()}
            </div>
        )
    }
}

const msp = (state)=>{
    return({
        students: state.entities.users,
    })
}

const mdp = (dispatch)=>{
    return({

    })
}

export default connect(msp,mdp)(Cohort)