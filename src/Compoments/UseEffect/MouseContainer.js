import React, { useState } from 'react'
import UseEffectMouse from './UseEffectMouse'

const MouseContainer = () => {
    const [display, setDisplay] = useState(true)

    const toggle = () => {
        setDisplay(false)
    }
    return (
        <div>
            <button onClick={toggle}>
                Toggle Display
            </button>
            {display && <UseEffectMouse />}
        </div>
    )
}

export default MouseContainer
