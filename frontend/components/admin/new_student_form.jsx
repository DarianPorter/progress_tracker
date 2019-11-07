import React from 'react'
import { connect } from 'react-redux'
// import 
class SignUpForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            class_year: "",
            password: "",
        }
    }

    feildsComplete(){
        for(let key in this.state){
            if (this.state[key].length == 0){
                return false
            }
        }
        return true
    }

    setStateVals(key, e){
        debugger
        this.setState({[key]: e.target.value})
        if(key == "last_name"){
            this.setState({ password: e.target.value + this.state.class_year })
        }else if (key == "class_year"){
            this.setState({ password: this.state.last_name + e.target.value })
        }
    }

    submitNewStudent(){
        debugger
        
    }
    
    render(){
        let button = this.feildsComplete() ? (
            <button onClick={()=>{this.submitNewStudent}} className="sign-up-student-button">
                Submit
            </button>
        ) : (
            null
        )
        return(
            <div className="sign-up-student-form" onClick={(e)=>{e.stopPropagation()}}>
                <div className="sign-up-form-header">
                    <h1> Sign Up Student</h1>
                </div>
                <div className="sign-up-form-name">
                    <div>        
                        <h2>Firstname:</h2>
                        <input onChange={(e)=>{
                            this.setStateVals("first_name", e)
                        }} type="text" placeholder="First Name"/>
                    </div>  
                    <div>
                        <h2>Lastname:</h2>
                        <input onChange={(e) => {
                            this.setStateVals("last_name", e)
                        }} type="text" placeholder="Last Name"/>
                    </div>  
                </div>
                <div className="sign-up-form-email">
                    <h2>Email</h2>
                    <input onChange={(e) => {
                        this.setStateVals("email", e)
                    }} type="text" placeholder="Email"/>
                </div>
                <div className="sign-up-form-class-year-password">
                    <div>
                        <h2> Password: Lastname + Class Year </h2>
                        <p className="highlight"> { this.state.password } </p>
                    </div>
                    <div>
                        <h2> Class Year: </h2>
                        <input onChange={(e) => {
                            this.setStateVals("class_year", e)
                        }}type="number" min={2016} placeholder="Year"/>
                    </div>
                </div>
                <div>
                    {button}
                </div>
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

    })
}
export default connect()(SignUpForm)