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

const Counter3 = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

    const increment = () => {
        dispatch('increment')
    }

    const decrement = () => {
        dispatch('decrement')
    }

    const reset = () => {
        dispatch('reset')
    }

    const incrementTwo = () => {
        dispatchTwo('increment')
    }

    const decrementTwo = () => {
        dispatchTwo('decrement')
    }

    const resetTwo = () => {
        dispatchTwo('reset')
    }

    return (
        <div>
            <h3>Count {count}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <div>
                <h3>Count Two {countTwo}</h3>
                <button onClick={incrementTwo}>Increment</button>
                <button onClick={decrementTwo}>Decrement</button>
                <button onClick={resetTwo}>Reset</button>
            </div>
        </div>
    )
}

export default Counter3
