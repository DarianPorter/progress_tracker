import React from 'react'
import {connect} from 'react-redux'
import CreateObjective from './create_objectives'
import AddTask from './add_task'

class Create extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: 0
        }
        this.tabComponents = [
            (props)=>{ return <CreateObjective props={props}/>},
            (props)=>{ return <AddTask props={props}/>}
        ]
        this.content = this.tabComponents[this.state.tab]

    }

    createTab(){
        let tabs = ["Create Objective", "Add Tasks"]
        return tabs.map((name, i)=>{
            if(this.state.tab == i){
                this.content = this.tabComponents[this.state.tab]
                return <p key={i} className="selected"> {name} </p>    
            }else{
                return <p key={i} onClick={()=>{
                    this.setState({tab: i})
                    this.content = this.tabComponents[this.state.tab]
                }}> {name} </p>    
            }
        })
    }

    render() {
        return (
            <div className="create">
                <div className="create-tabs-container">
                    <div className="create-tabs">
                        {this.createTab()}
                    </div>
                </div>
                <div>
                    {this.content()}
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