// import Image from 'next/image'
import React from 'react'
import { Pacifico } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'

const pacifico = Pacifico({ subsets: ["latin"], weight: "400"})

function Header() {
    
  return (
    <div className='p-3 px-5 flex items-center justify-between shadow-md'>
        <div className='flex gap-3 items-center'>
            <h1 className={`${pacifico.className} text-3xl font-bold text-primary cursor-pointer`}>RealAI</h1>
        </div>
        <div className='flex gap-3 items-center'>
            <Button>DashBoard</Button>
            <UserButton/>
        </div>
    </div>
  )
}

export default Header