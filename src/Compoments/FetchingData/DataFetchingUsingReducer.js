import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {

        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.value
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Something Went Wrong ...'
            }

        default:
            return state
    }
}

const DataFetchingUsingReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', value: res.data })
            })
            .catch(error => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    }, [])


    return (
        <div>
            {state.loading ? 'loading ...' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default DataFetchingUsingReducer
