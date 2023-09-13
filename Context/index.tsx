"use client"
import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import nookies, { parseCookies } from 'nookies'
import { useRouter } from "next/navigation"
type TUserType = {
    _id?: number,
    name?: string,
    email?: string,
    password?: string,
    token?: string
}
type TRegisterParams = {
    email: string, name: string, password: string
}
type TContextType = {
    user: TUserType,
    login: (email: string, password: string) => void,
    register: ({ email, name, password }: TRegisterParams) => void,
    errors: { [key: string]: any }
}
const Context = createContext<TContextType>({
    user: {},
    login: (email, password) => undefined,
    register: ({ email, name, password }) => undefined,
    errors:{}
})

const Index = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<TUserType>({})
    const [errors, setErrors] = useState<{ [key: string]: any }>({})
    const router = useRouter()
    const login = (email: string, password: string) => {
        axios.post("/api/v1/login", {
            email,
            password
        })
            .then(({ data }: { data: { user: TUserType } }) => {
                if (data.user.token) {
                    const oneDay = 24 * 60 * 60 * 1000
                    nookies.set(null, "video_chat_token", data.user.token, {
                        maxAge: oneDay * 3
                    })
                    setUser(data.user)
                    router.back()
                }
            }).catch((err) => console.error(err)
            )
    }

    const register = ({ name, email, password }: TRegisterParams): undefined => {
        axios.post("/api/v1/register", { name, email, password })
            .then(({ data }: { data: { user: TUserType } }) => {
                if (data.user.token) {
                    const oneDay = 24 * 60 * 60 * 1000
                    nookies.set(null, "video_chat_token", data.user.token, {
                        maxAge: oneDay * 3
                    })
                    setUser(data.user)
                    router.back()
                }
            })
            .catch((err: any) => {
                console.error(err);
                if (err?.response?.data) {
                    setErrors(err?.response?.data)
                }
            })
    }
    useEffect(() => {
        const cookies = parseCookies()
        const token = cookies?.video_chat_token
        if (token) {
            axios.get("/api/v1/get-user", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(({ data }) => {
                setUser({ ...data?.user, token });
            })
                .catch((err) => console.error(err)
                )
        }

    }, [])
    return (
        <Context.Provider value={{ login, user, register, errors }}>
            {children}
        </Context.Provider>
    )
}
export const useAuthContext = () => {
    return useContext(Context)
}
export default Index