import React from 'react'
import CompomentE from './CompomentE'

const CompomentC = () => {
    return (
        <div>
            <h3>CompomentB calling E</h3>
            <CompomentE />
        </div>
    )
}

export default CompomentC
