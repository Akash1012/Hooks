import React, { useReducer } from 'react'


const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                firstCounter: state.firstCounter + action.value
            }
        case 'decrement':
            return {
                ...state,
                firstCounter: state.firstCounter - action.value
            }
        case 'increment2':
            return {
                ...state,
                secondCounter: state.secondCounter + action.value
            }
        case 'decrement2':
            return {
                ...state,
                secondCounter: state.secondCounter - action.value
            }
        case 'reset':
            return initialState
        default:
            return state
    }
}

const Counter1 = () => {
    const [count, dispatch] = useReducer(reducer, initialState)

    const increment = () => {
        dispatch({ type: 'increment', value: 1 })
    }

    const decrement = () => {
        dispatch({ type: 'decrement', value: 1 })
    }

    const increment5 = () => {
        dispatch({ type: 'increment', value: 5 })
    }

    const decrement5 = () => {
        dispatch({ type: 'decrement', value: 5 })
    }

    const increment2 = () => {
        dispatch({ type: 'increment2', value: 10 })
    }

    const decrement2 = () => {
        dispatch({ type: 'decrement2', value: 10 })
    }


    const reset = () => {
        dispatch({ type: 'reset' })
    }

    return (
        <div>
            <h3>First Count {count.firstCounter}</h3>
            <h3>Second Count {count.secondCounter}</h3>

            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment5}>Increment 5</button>
            <button onClick={decrement5}>Decrement 5</button>
            <button onClick={increment2}>Increment  Counter 2</button>
            <button onClick={decrement2}>Decrement  Counter 2</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter1
