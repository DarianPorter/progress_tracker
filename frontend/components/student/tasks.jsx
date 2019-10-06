import React from 'react'
import { connect } from 'react-redux'

class Tasks extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="tasks">

            </div>
        )
    }
}

const msp = () => {
    return ({

    })
}

const mdp = () => {
    return ({

    })
}

export default connect(msp, mdp)(Tasks)