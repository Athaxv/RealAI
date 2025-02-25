"use client"
import React, { useState } from 'react'
import EmptyState from './_components/EmptyState';

function page() {
  const [ videoList, setVideoList ] = useState([]);

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-2xl text-primary'>Dashboard</h2>
        <Button>+ Create new</Button>
      </div>

      {videoList?.length == 0 && <div>
        <EmptyState/>
      </div> }
    </div>
  )
}

export default page