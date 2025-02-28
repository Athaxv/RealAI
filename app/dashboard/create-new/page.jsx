'use client'
import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle';
import SelectDuration from './_components/SelectDuration';
import { Button } from '@/components/ui/button';
import axios from 'axios';

function page() {
    const [formData, setFormData] = useState({});
    const onHandleInputChange = (fieldName, fieldValue) => {
        console.log(fieldName, fieldValue)
        setFormData(prev => ({
            ...prev,
            [fieldName]: fieldValue
        }))
    }

    const handleSubmit = () => {
        GetVideoScript();
    }

    const GetVideoScript = async () => {
        const prompt = 'Write a script to generate a '+formData.duration+' video on topic: Interesting '+formData.topic+' along with AI image prompt in'+formData.imageStyle+' format for each scene and give me result in JSON format with imagePrompt and contentText as field, no plain text'
        console.log(prompt)
        const result = await axios.post('/api/get-video-script', {
            prompt: prompt,
        }).then((res) => console.log(res.data))
    }
  return (
    <div className='md:px-20'>
        <h2 className='font-bold text-4xl text-primary '>Create Your Reel</h2>
        <div className='mt-7 shadow-md p-10'>
            <SelectTopic onUserSelect={onHandleInputChange}/>
            <SelectStyle onUserSelect={onHandleInputChange}/>
            <SelectDuration onUserSelect={onHandleInputChange}/>
            <Button className="mt-5 w-full" onClick={handleSubmit}>Create short</Button>
        </div>
    </div>
  )
}

export default page