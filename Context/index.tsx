"use client"
import React, { createContext, useContext, useState } from 'react'
import axios from 'axios'
import nookies from 'nookies'
import { useRouter } from "next/navigation"
type TContextType = {
    user?: {},
    login?: (email: string, password: string) => void
}
const Context = createContext<TContextType>({
    user: {},
    login: (email, password) => 0
})
const Index = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter()
    const login = (email: string, password: string) => {
        axios.post("/api/v1/login", {
            email,
            password
        })
            .then(({ data }) => {
                const oneDay = 24 * 60 * 60 * 1000
                nookies.set(null, "video_chat_token", data.user.token, {
                    maxAge: oneDay * 3
                })
                router.back()
            }).catch((err) => console.error(err)
            )
    }
    return (
        <Context.Provider value={{ login }}>
            {children}
        </Context.Provider>
    )
}
export const useAuthContext = () => {
    return useContext(Context)
}
export default Index