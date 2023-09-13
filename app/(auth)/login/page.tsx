"use client"
import React, { useState } from 'react'
import Button from '@/Components/UI/Button'
import { useAuthContext } from '@/Context'
import Input from '@/Components/UI/Input'
const Page = () => {
  const { login, register } = useAuthContext()
  const [authDetails, setAuthDetails] = useState<{ email: string, password: string, name: string }>({ email: "", password: "", name: "" })
  const [authType, setAuthType] = useState<"login" | "register">("login")
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setAuthDetails(prev => ({ ...prev, [name]: value }))
  }

  return (

    <div className="h-[90vh]   flex items-center justify-center ">

      <div className=' bg-white shadow-xl px-5 py-12 rounded-sm  max-w-md w-full mx-auto  '>
        <div className=" grid  grid-cols-2 gap-3 mb-8 ">
          <Button onClick={() => setAuthType("login")} variant={authType === "login" ? "primary" : "secondary"} >
            Login
          </Button>
          <Button onClick={() => setAuthType("register")} variant={authType === "register" ? "primary" : "secondary"}>
            Register
          </Button>
        </div>

        <div className=' space-y-3' >

          {authType === "register" && <div>
            <label htmlFor="" className='  font-medium mb-3 block  ' > Name</label>
            <Input

              placeholder="Name"
              value={authDetails.name
              }
              name='name'
              onChange={handleChange}
            />
          </div>}

          <div>
            <label htmlFor="" className='  font-medium mb-3 block  ' > Email</label>
            <Input
              type="email"
              placeholder="Email"
              value={authDetails.email
              }
              name='email'
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="" className='  font-medium mb-3 block  ' > Password</label>
            <Input
              type="password"
              placeholder="password"
              value={authDetails.password}
              onChange={handleChange}
              name='password'
            />
          </div>
        </div>

        <Button className=' w-full mt-8 ' onClick={() => authType === "register" ? register(authDetails) : login(authDetails.email, authDetails.password)} >
          {authType === "register" ? "Register" : "Login"}
        </Button>
      </div>
    </div>
  )
}

export default Page