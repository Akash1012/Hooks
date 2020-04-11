import React from 'react'
import { UserConsumer, ChannelConsumer } from '../../userContext'


const CompomentF = () => {
    return (
        <div>
            <UserConsumer>
                {(userName) => {
                    return (
                        <ChannelConsumer>
                            {(channel => {
                                return (
                                    <div>
                                        <div>Hello {userName}</div>
                                        <div>Hello {channel}</div>
                                    </div>
                                )
                            })}
                        </ChannelConsumer>
                    )
                }}
            </UserConsumer>
        </div>
    )
}
export default CompomentF