import React from 'react'
import {connect} from 'react-redux'

class Aproval extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                aprove
            </div>
        )
    }
}

const msp = (state) => {
    return ({

    })
}

const mdp = (dispatch) => {
    return ({

    })
}

export default connect(msp, mdp)(Aproval)