"use client"
import React, { useState } from 'react'
import Button from '@/Components/UI/Button'
import { useAuthContext } from '@/Context'

const Page = () => {
  const { login } = useAuthContext()
  const [authDetails, setAuthDetails] = useState<{ email: string, password: string }>({ email: "", password: "" })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setAuthDetails(prev => ({ ...prev, name, value }))
  }
  return (

    <div className="h-[90vh]   flex items-center justify-center ">

      <div className=' bg-white shadow-xl px-5 py-12 rounded-sm  max-w-md w-full mx-auto  '>

        <div className=' space-y-3' >

          <div>
            <label htmlFor="" className='  font-medium mb-3 block  ' > Email</label>
            <input
              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
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
            <input
              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="password"
              placeholder="password"
              value={authDetails.password}
              onChange={handleChange}
              name='password'
            />
          </div>
        </div>

        <Button className=' w-full mt-8 ' onClick={() => login?.(authDetails.email, authDetails.password)} >
          Login
        </Button>
      </div>
    </div>
  )
}

export default Page