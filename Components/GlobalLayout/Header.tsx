"use client"
import React from 'react'
import Link from "next/link"
const Header = () => {
  return (
    <div className='container px-5 flex items-center justify-between '  >
      Global Header
      <Link href="/login" className=' bg-lime-300 text-white px-5 py-2 font-medium rounded-lg  ' >
        Login
      </Link>
    </div>
  )
}

export default Header