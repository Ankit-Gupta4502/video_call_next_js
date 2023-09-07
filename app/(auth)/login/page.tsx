"use client"
import React from 'react'
import axios from 'axios'
import nookies from 'nookies'
const page = () => {
    const handleSubmit = () => {
        axios.post("http://localhost:8000/api/v1/login", {
          email: "user234@gmail.com",
          password: "password1"
        })
          .then(({ data }) => {
            console.log(data);
            const oneDay = 24 * 60 * 60 * 1000
            nookies.set(null, "video_chat_token", data.user.token, {
              maxAge: oneDay * 3
            })
          }).catch((err) => console.error(err)
          )
      }
    return (
        <button className=' bg-lime-300 text-white px-5 py-2 font-medium rounded-lg  ' onClick={handleSubmit}  >Login</button>
    )
}

export default page