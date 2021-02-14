import React, { useState, useEffect, Component } from 'react'

const UseEffectMouse = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePostion = (e) => {
        console.log("logMousePostion....")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("calling .....")
        window.addEventListener('mousemove', logMousePostion)
        return () => { // unmounting mode
            console.log("Compoment unmounting code .....")
            window.removeEventListener('mousemove', logMousePostion)
        }
    }, [])
    // ye pass kr n se hum log Componentdidmount ko copy kr sakte , bus ek bar call hoga ye .... []

    return (
        <div>
            X : {x}
            Y : {y}
        </div>
    )
}

export default UseEffectMouse
