import React from 'react'

const UserConstext = React.createContext()

const  userProvider = UserConstext.Provider
const  userConsumer = UserConstext.Consumer

export {userProvider, userConsumer}
