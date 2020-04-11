import React, { Component } from 'react'
import CompomentF from './CompomentF'
import { UserContext } from '../../userContext'

class CompomentE extends Component {
    render() {
        return (
            <div>
                {/* CompomentE ---> Context -- {this.context} */}
                <CompomentF />
            </div>
        )
    }
}

CompomentE.contextType = UserContext
export default CompomentE