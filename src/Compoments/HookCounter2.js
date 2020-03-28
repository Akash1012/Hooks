import React, { useState } from 'react'

const HookCounter2 = () => {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const reset = () => {
        setCount(initialCount)
    }

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1)
    }

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }
    return (
        <div>
            Count: {count}
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={incrementFive}>IncrementFive</button>
        </div>
    )
}

export default HookCounter2
