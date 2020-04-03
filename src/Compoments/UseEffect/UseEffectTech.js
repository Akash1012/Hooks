import React,{useState,useEffect} from 'react'

let born = false
const  UseEffectTech = () => {
    const [growth,setGrowth] = useState(0)
    const [nirvana,setnirvana] = useState(false)

    useEffect(() => {
        if(born) {
            document.title = "nirvana attained ..."
            console.log("nirvana")
        }
    }, [nirvana])


    useEffect(() => {
        console.log("I am born")
    }, [])

    useEffect(() => {
        if(born) {
            console.log("make mistake and learn")
        }
        else {
            born = true
            console.log("Born True ...")
        }

        if(growth > 3) {
            setnirvana(true)
        }

        return (() => {
            console.log("Clean Code ...")
        })
    })

    const increment = () => {
        setGrowth(prevCount => prevCount + 1)
    }

    return (
        <div>
            <h2>Growth: {growth}</h2>
            <button onClick = {increment}> Click </button>
        </div>
    )
}

export default UseEffectTech
