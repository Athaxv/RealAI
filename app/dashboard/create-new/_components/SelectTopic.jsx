"use client"
import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Textarea } from '@/components/ui/textarea';
  

function SelectTopic({onUserSelect}) {
    const options = ['Custom prompt', 'Random AI story', 'Scary story', 'Riddle', 'Motivational', 'Fun Facts', 'Bed Time']
    const [selectedOption, setSelectedOption] = useState();
  return (
    <div>
        <h2 className='font-bold text-xl text-primary'>Content</h2>
        <p className='text-gray-500'>What is the topic of your video?</p>
        <Select onValueChange={(value) => {setSelectedOption(value)
                value != 'Custom prompt' && onUserSelect('topic', value)
        }}
            >
                <SelectTrigger className="w-full mt-2 p-6 text-lg">
                    <SelectValue placeholder="Content Type" />
                </SelectTrigger>
                <SelectContent>
                    {options.map((item, index) => (
                        <SelectItem value={item}>{item}</SelectItem>
                    ))}
                </SelectContent>
        </Select>
        { selectedOption == 'Custom prompt' && 
            <Textarea onChange={(e) => onUserSelect('topic', e.target.value)} className="mt-3" placeholder="Enter prompt message to generate" rows={4} />
        }
    </div>
  )
}

export default SelectTopic