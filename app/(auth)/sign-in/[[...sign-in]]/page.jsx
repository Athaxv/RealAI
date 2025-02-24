import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className='flex min-h-screen items-center justify-center gap-40 '>
      <div className='hidden md:block'>
        <Image src={'/img2.jpg'} height={500} width={500}></Image>
      </div>
      <div>
        <SignIn/>
      </div>
    </div>
  )
}

export default page