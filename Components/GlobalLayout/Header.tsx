
import React,{memo} from 'react'
import Link from "next/link"
import Button from '../UI/Button'
const Header = () => {
  return (
    <div className='container px-5 flex items-center justify-between  py-5  '  >
      <Link href="/" >

      Global Header
      </Link>
      <Link href="/login"  >
        <Button>
          Login
        </Button>
      </Link>
    </div>
  )
}

export default memo(Header)