import React from 'react'

const Student = (props)=>{
    let student = props.student
    let student_name = student.first_name + " " + student.last_name
    return(
        <div className="student-strip">
            <p className="highlight name"> {student_name} </p>
            <a 
                className="email"
                href={`mailto:${student.email}?subject=Incomplete Work`}
            > {student.email} </a>
            <p>
                Objectives complete
                <span style={{ color: "red" }}> x/x</span>
            </p>
            <p>
                Tasks complete
                <span style={{ color: "red" }}> x/x</span>
            </p>
            <p className="highlight year">{student.class_year}</p>
        </div>
    )
}

export default Student