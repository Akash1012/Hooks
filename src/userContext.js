import React from 'react'

const UserContext = React.createContext('Code ...')
const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer


const ChannelContext = React.createContext('Channel Contex')
const ChannelProvider = ChannelContext.Provider
const ChannelConsumer = ChannelContext.Consumer



export { UserProvider, UserConsumer, ChannelProvider, ChannelConsumer, UserContext, ChannelContext }

// export default UserContext