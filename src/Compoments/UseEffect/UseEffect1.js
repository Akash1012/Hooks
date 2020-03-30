import React, { useState, useEffect } from 'react'

const UseEffect1 = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log("use effect is calling ....")
        document.title = `You Clicked ${count} times`
    }, [count])

    const increment = () => {
        setCount(prevState => prevState + 1)
    }

    const handleName = (e) => {
        setName(e.target.value)
    }
    return (
        <div>
            <h1>{name}</h1>
            <input type='text' value={name} name='name' onChange={handleName} />
            <button onClick={increment}>Click {count}</button>
        </div>
    )
}

export default UseEffect1