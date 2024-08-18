import React, { useContext } from 'react'
import { UserContext } from './userContext'

const useStoreContext = () => useContext(UserContext)

export default useStoreContext ;