import React, { useState, useEffect } from 'react'

const UseEffectIntervalClassCounter = () => {

    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(count => count + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)

        return (() => {
            console.log("Akash")
            clearInterval(interval)
        })
    }, [count])

    return (
        <div>
            <h2>useEffect {count}</h2>
        </div>
    )
}

export default UseEffectIntervalClassCounter
