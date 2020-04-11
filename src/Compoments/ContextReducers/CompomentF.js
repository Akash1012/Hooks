import React, { useContext } from 'react'
import { CountContext } from './rootContext'

const CompomentF = () => {

    const countContext = useContext(CountContext)

    const increment = () => {
        countContext.countDispatch('increment')
    }

    const decrement = () => {
        countContext.countDispatch('decrement')
    }

    const reset = () => {
        countContext.countDispatch('reset')
    }
    return (
        <div>
            <h3>CompomentF {countContext.countState}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CompomentF
