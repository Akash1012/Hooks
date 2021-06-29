import React, { useReducer } from 'react'
import CompomentA from './CompomentA'
import CompomentB from './CompomentB'
import CompomentC from './CompomentC'
import { CountContextProvider } from './rootContext' // Provider

const Reducers = () => {
    const initialState = {
        abc: 0,
        name: "Akash"
    }

    const reducer = (state, action) => {
        switch (action) {
            case 'increment':
                return {
                    ...state,
                    abc: state.abc + 1
                }
            case 'decrement':
                return state - 1
            case 'reset':
                return initialState
            default:
                return state
        }
    }
    const [count, dispatch] = useReducer(reducer, initialState)

    // const { abc } = count;
    return (
        <div>
            Count -
            <CountContextProvider value={{ countState: count, countDispatch: dispatch }}>
                <CompomentA />
                {/* <CompomentB />
                <CompomentC /> */}
            </CountContextProvider>
        </div>
    )
}

export default Reducers

