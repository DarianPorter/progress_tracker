import React from 'react'
import {connect} from 'react-redux'
import { thunkPresentNewStudent } from '../../actions/ui_actions'
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
        let studentForm = this.props.studentFormIsActive ? (
            <div className="objective-picker" onClick={()=>{
                this.props.studentFormSetActive(false)
            }}>
                <div className="sign-up-student-form">

                </div>
            </div>
        ) : (
            null
        )

        return(
            <>
                {studentForm}

                <div className="add-student" onClick={()=>{
                    this.props.studentFormSetActive(true)
                }}> + </div>

                <div className="student-strip" style={{textDecoration: "underline"}}>
                    <p className="name" >Name</p>
                    <p style={{ paddingRight: "120px" }}>Email</p>
                    <p>Objectives Completed</p>
                    <p>Tasks Completed</p>
                    <p>Class Year</p>
                </div>

                <div className="student-slices" >
                    {this.setUp()}
                </div>
            </>
        )
    }
}

const msp = (state)=>{
    return({
        students: state.entities.users,
        studentFormIsActive: state.ui.createNewStudentModal,
    })
}

const mdp = (dispatch)=>{
    return({
        studentFormSetActive: (active) => { dispatch(thunkPresentNewStudent(active))}
    })
}

export default connect(msp,mdp)(Cohort)