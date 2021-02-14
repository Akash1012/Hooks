import React, { useState } from 'react'

const HookCounter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div>
            <button onClick={increment}>count {count}</button>
        </div>
    )
}

export default HookCounter