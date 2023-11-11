'use client'
import React, { useEffect, useState } from 'react'
import UserContext from './userContext'
import { toast } from 'react-toastify'
import { currentUser } from '@/servicesApi/userServices'

const UserProvider = ({ children }) => {
    const [user, setUser] = useState('')
    useEffect(() => {
        async function load() {
            try {
                const logUser = await currentUser()
                setUser({ ...logUser })
            } catch (error) {
                console.log(error)
                setUser(undefined)
            }
        }
        load()
    }, [])
    return <UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>
}

export default UserProvider
