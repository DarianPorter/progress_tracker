import React from 'react'
import {connect} from 'react-redux'

class Create extends React.Component {
    constructor(props) {
        super(props)
    }

    ammountOfTasks(amount=1){
        let taskFeilds = []
        for(let i = 0; i < amount; i++){

        }
        return taskFeilds
    }

    render() {
        return (
            <div className="create-objective-and-task">
                <div className="create-objective">
                    <div className="create-header"> 
                        <h1> Create Objective </h1>
                    </div>
                    {/* <button> Choose existing </button> */}
                </div>
                <div className="new-objective">
                    <input type="text" placeholder="New Name"/>
                </div>
            </div>
        )
    }
}

const msp = (state)=> {
    return ({

    })
}

const mdp = (dispatch)=> {
    return ({

    })
}

export default connect(msp, mdp)(Create)