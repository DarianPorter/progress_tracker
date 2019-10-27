import React from 'react'
import { connect } from 'react-redux'

class NewStudentObjective extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            studentIds: []
        }
    }

    formatStudentRows(){
        let students = this.props.students;
        let nonAdmin = Object.keys(students).map((key, i)=>{
            let student = students[key]
            if(student.is_admin){
                return
            }
            return(
                <div key={i} className="student-select">
                    <input onClick={()=>{
                        let joined = this.state.studentIds.concat(student.id);
                        this.setState({studentIds: joined})
                    }}type="checkbox"></input>
                    <p className="student-select-name highlight">
                        {student.first_name + " " + student.last_name}
                    </p>
                    <p className="student-select-email"> {student.email} </p>
                    <p className="highlight"> {student.class_year} </p>
                </div>
            )
        })
        return nonAdmin.sort((studA, studB)=>{ 
            studA.class_year > studB.class_year
        })
    } 

    render(){
        return(
            <div className="new_student_objective">
                <div className="new-objective">
                    <p> Objective name </p>
                    <input placeholder="Name" type="text"/>
                </div>
                <div className="add-students">
                    <h1> Students </h1>
                    <div className="student-rows">
                        {this.formatStudentRows()}
                    </div>
                </div>
            </div>
        )
    }
}

const msp = (state)=>{
    return{
        students: state.entities.users
    }
}
const mdp = (dispatch)=>{
    return{

    }
}

export default connect(msp, mdp)(NewStudentObjective)