import React, { useReducer } from 'react'


const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

const Counter1 = () => {
    const [count, dispatch] = useReducer(reducer, initialState)

    const increment = () => {
        dispatch('increment')
    }

    const decrement = () => {
        dispatch('decrement')
    }

    const reset = () => {
        dispatch('reset')
    }

    return (
        <div>
            <h3>Count {count}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter1
