import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function EmptyState() {
  return (
    <div className='p-5 py-24 flex items-center flex-col mt-10 border-2 border-dashed'>
        <h2 className='font-light'>You don't have any AIShorts</h2>
        <Link href={'/dashboard/create-new'}>
        <Button>Creant new Short</Button>
        </Link>
    </div>
  )
}

export default EmptyState