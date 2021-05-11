import React from 'react';
import { myContext } from './main'
import Name3 from './Name3';


const Name2 = () => {
    const myName2 = React.useContext(myContext)
    const changeName = () => {
        myName2.changeName({ type: "CHANGE_NAME", payload: 'Golu' })
    }
    return (
        <div>
            My Name2 is {myName2.name}
            <button onClick={() => changeName()}>Change Name</button>
            <Name3 />
        </div>
    )
}

export default Name2