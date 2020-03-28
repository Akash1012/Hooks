import React, { useState } from 'react'

const HookCounter3 = () => {
    const [name, setName] = useState({ firstName: '', lastName: '' })

    const handleInputChange = (e) => setName({
        ...name,
        [e.target.name]: e.target.value
    })
    return (
        <div>
            <form>
                <input type="text" name="firstName" onChange={handleInputChange} />
                <input type="text" name="lastName" onChange={handleInputChange} />
                <h2>Your First Name is -> {name.firstName}</h2>
                <h2>Your Last Name is -> {name.lastName}</h2>
                <input type="submit" />
            </form>
        </div>
    )
}

export default HookCounter3
