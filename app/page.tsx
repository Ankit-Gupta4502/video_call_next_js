"use client"
import Button from '@/Components/UI/Button'
import Image from 'next/image'
import axios from 'axios'
import { useAuthContext } from '@/Context'
export default function Home() {
  const { logOut, user, loading } = useAuthContext()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      {
        loading ? "wait...." :
          user._id ? <Button onClick={logOut} >
            Log Out
          </Button> : "Hi there!"

      }
    </main>
  )
}
