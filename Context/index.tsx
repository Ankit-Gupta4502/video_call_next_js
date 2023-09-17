"use client"
import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import axios from 'axios'
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
    logOut: () => void,
    register: ({ email, name, password }: TRegisterParams) => void,
    errors: { [key: string]: any },
    loading: boolean
}
const Context = createContext<TContextType>({
    user: {},
    login: (email, password) => undefined,
    register: ({ email, name, password }) => undefined,
    errors: {},
    logOut: () => undefined,
    loading: true
})

const Index = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<TUserType>({})
    const [errors, setErrors] = useState<{ [key: string]: any }>({})
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    const logOut = () => {
        axios("/api/v1/logout")
            .then(({ data }) => {
                console.log(data)
                setUser({})
            })
            .catch((err) => console.error(err)
            )
    }
    const login = (email: string, password: string) => {
        axios.post("/api/v1/login", {
            email,
            password
        }, {
            withCredentials: true,
        })
            .then(({ data }: { data: { user: TUserType } }) => {
                if (data.user.token) {
                    setUser(data.user)
                    router.back()
                }
            }).catch((err) => console.error(err)
            )
    }

    const register = ({ name, email, password }: TRegisterParams): undefined => {
        axios.post("/api/v1/register", { name, email, password }, {
            withCredentials: true
        })
            .then(({ data }: { data: { user: TUserType } }) => {
                if (data.user.token) {
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

        axios.get("/api/v1/get-user").then(({ data }) => {
            setUser(data.user);
            setLoading(false)
        })
            .catch((err) => {
                console.error(err)
                setLoading(false)
            }
            )
    }, [])
    return (
        <Context.Provider value={{ login, user, register, errors, logOut, loading }}>
            {children}
        </Context.Provider>
    )
}
export const useAuthContext = () => {
    return useContext(Context)
}
export default Index