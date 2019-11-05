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

    }

    render(){
        let button = this.feildsComplete() ? (
            <button>
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
                        <input type="text" placeholder="First Name"/>
                    </div>  
                    <div>
                        <h2>Lastname:</h2>
                        <input type="text" placeholder="Last Name"/>
                    </div>  
                </div>
                <div className="sign-up-form-email">
                    <h2>Email</h2>
                    <input type="text" placeholder="Email"/>
                </div>
                <div className="sign-up-form-password">

                    <input type="number" min={2016}/>
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