import React, { useContext, } from 'react';
import Name2 from './Name2';
import { myContext } from './main'

const Name1 = () => {
    const myName1 = useContext(myContext)
    return (
        <div>
            My Name1 is {myName1.name}
            <Name2 />
        </div>
    )
}

export default Name1