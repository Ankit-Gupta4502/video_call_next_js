"use client"
import React, { memo } from 'react'
import Link from "next/link"
import Button from '../UI/Button'
import { useAuthContext } from '@/Context'
const Header = () => {
  const { user } = useAuthContext()
  return (
    <div className='container px-5 flex items-center justify-between  py-5  '  >
      <Link href="/" >
        Global Header
      </Link>
      {!user._id ? <Link href="/login"  >
        <Button>
          Login
        </Button>
      </Link> : <span>
        {user!.email}
      </span>}
    </div>
  )
}

export default memo(Header)