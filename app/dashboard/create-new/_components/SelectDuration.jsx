import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

function SelectDuration({onValueChange}) {
    const [duration, setDuration] = useState()
  return (
    <div className='mt-5'>
        <h2 className='font-bold text-xl text-primary'>Duration</h2>
        <p className='text-gray-500'>Select your Duration</p>
        <Select onValueChange={(value) => {setDuration(value)
        }}
            >
                <SelectTrigger className="w-full mt-2 p-6 text-lg">
                    <SelectValue placeholder="Set Duration" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value='20 seconds'>20</SelectItem>
                <SelectItem value='40 seconds'>40</SelectItem>
                <SelectItem value='60 seconds'>60</SelectItem>
                </SelectContent>
        </Select>
    </div>
  )
}

export default SelectDuration