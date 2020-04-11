import React, { useContext } from 'react'
import { UserContext, ChannelContext } from '../../userContext'
import CompomentE from './CompomentE'

const CompomentC = () => {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <div>
            CompomentC === {user}
            <br />
            Compoment_Channel === {channel}
            <CompomentE />
        </div>
    )
}
export default CompomentC