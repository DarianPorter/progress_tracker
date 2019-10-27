import React from 'react'
import { withRouter } from 'react-router-dom'

class Navigation extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selected: 2
        }
    }

    returnTabs(){
        let tabs = []
        let names = ["Students", "Aprovals", "Create"]
        for(let i = 0; i < 3; i++){
            if (i == this.state.selected){
                tabs.push(<p className="selected" key={i}>{ names[i] }</p>)
            }else{
                tabs.push(<p 
                    onClick={
                        ()=>{
                            this.setState({selected: i});
                            this.props.history.push(names[i].toLowerCase())
                        }
                    } 
                    key={i}
                    >{ names[i] }</p>
                )
            }
        }
        return tabs 
    }
    
    render(){
        return(
            <div className="admin-nav">
                <div className="controlls">
                    {this.returnTabs()}
                </div>
            </div>
        )
    }
}
export default withRouter(Navigation)