import React, { useContext, useReducer, createContext } from 'react'

import Name1 from './Name1';

export const myContext = createContext("Hero");

// reducer

const initialState = {
    name: "Akash",
    Number: 100
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                name: action.payload
            }
        default: return state
    }
}


// Action

const Main = () => {

    const [data, dispatch] = useReducer(reducer, initialState)
    return (
        <myContext.Provider value={
            { name: data.name, number: data.Number, changeName: dispatch }
        }>
            <div>
                Main
            <Name1 />
            </div>
        </myContext.Provider >
    )
}

export default Main