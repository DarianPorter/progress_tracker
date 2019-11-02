import React from 'react'
import { connect } from 'react-redux'
import { thunkCreateObjective } from '../../actions/objective_actions'

class NewStudentObjective extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            studentIds: [],
            objectiveName: ""
        }
    }

    handleSubmit(){
        this.state.studentIds.map((id)=>{
            this.props.createObjectives({
                name: this.state.objectiveName,
                user_id: id
            })
        });
        alert("Student Objectives Created")
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
                    <input onClick={(e)=>{
                        if(e.currentTarget.checked){
                            let joined = this.state.studentIds.concat(student.id);
                            this.setState({studentIds: joined})
                        }else{  
                            let filtered = this.state.studentIds.filter((id)=>{
                                return id != student.id
                            })
                            this.setState({studentIds: filtered})
                        }
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
        let button = (this.state.studentIds.length != 0 && this.state.objectiveName!= "") ? (
            <button onClick={()=>{this.handleSubmit()}}>
                Submit
            </button>
        ) : (
            null
        )

        return(
            <div className="new_student_objective">
                <div className="new-objective">
                    <p> Objective name </p>
                    <div>
                        <input onChange={(e)=>{
                            this.setState({objectiveName: e.currentTarget.value})
                        }} placeholder="Name" type="text"/>
                        { button }
                    </div>
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
        createObjectives: (objectiveInfo) => { 
            return dispatch(thunkCreateObjective(objectiveInfo))
        }
    }
}

export default connect(msp, mdp)(NewStudentObjective)