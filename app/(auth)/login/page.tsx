"use client"
import React from 'react'
import axios from 'axios'
import nookies from 'nookies'
import Button from '@/Components/UI/Button'
import { useRouter } from "next/navigation"
const page = () => {
  const router = useRouter()
  const handleSubmit = () => {
    axios.post("http://localhost:8000/api/v1/login", {
      email: "user234@gmail.com",
      password: "password1"
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

    <div className="h-[90vh]   flex items-center justify-center ">

      <div className=' bg-white shadow-xl px-5 py-12 rounded-sm  max-w-md w-full mx-auto  '>

        <div className=' space-y-3' >

          <div>
            <label htmlFor="" className='  font-medium mb-3 block  ' > Email</label>
            <input
              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Email"
            />
          </div>

          <div>
            <label htmlFor="" className='  font-medium mb-3 block  ' > Password</label>
            <input
              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="password"
              placeholder="password"
            />
          </div>
        </div>

        <Button className=' w-full mt-8 ' >
          Login
        </Button>
      </div>
    </div>
  )
}

export default page