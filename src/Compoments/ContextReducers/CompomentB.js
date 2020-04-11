import React from 'react'
import CompomentD from './CompomentD'

const CompomentB = () => {
    return (
        <div>
            <h3>CompomentB calling D</h3>
            <CompomentD />
        </div>
    )
}

export default CompomentB
