import React, { useReducer } from 'react'
import CompomentA from './CompomentA'
import CompomentB from './CompomentB'
import CompomentC from './CompomentC'
import { CountContextProvider } from './rootContext'

const Reducers = () => {
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
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            Count - {count}
            <CountContextProvider value={{ countState: count, countDispatch: dispatch }}>
                <CompomentA />
                <CompomentB />
                <CompomentC />
            </CountContextProvider>
        </div>
    )
}

export default Reducers

