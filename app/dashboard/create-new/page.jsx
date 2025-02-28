'use client'
import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle';
import SelectDuration from './_components/SelectDuration';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import CustomLoading from './_components/CustomLoading';

function page() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({});
    const [videoScript, setVideoScript] = useState()

    const onHandleInputChange = (fieldName, fieldValue) => {
        console.log(fieldName, fieldValue)
        setFormData(prev => ({
            ...prev,
            [fieldName]: fieldValue
        }))
    }

    const handleSubmit = () => {
        GetVideoScript();
        // setLoading(true);
    }

    const GetVideoScript = async () => {
        setLoading(true);
        const prompt = 'Write a script to generate a '+formData.duration+' video on topic: Interesting '+formData.topic+' along with AI image prompt in'+formData.imageStyle+' format for each scene and give me result in JSON format with imagePrompt and contentText as field, no plain text'
        console.log(prompt)
        const result = await axios.post('/api/get-video-script', {
            prompt: prompt,
        }).then((res) => {
            console.log(res.data.result);
            setVideoScript(res.data.result);
            // GenerateAudioFile(res.data.result)
        })
        setLoading(false);
    }

    // const GenerateAudioFile = (videoScriptData) => {
    //     let script = '';
    //     videoScriptData.forEach(item => {
    //         script = script + item.contenttext + ' ';
    //     })
    //     console.log(script);
    // }
  return (
    <div className='md:px-20'>
        <h2 className='font-bold text-4xl text-primary '>Create Your Reel</h2>
        <div className='mt-7 shadow-md p-10'>
            <SelectTopic onUserSelect={onHandleInputChange}/>
            <SelectStyle onUserSelect={onHandleInputChange}/>
            <SelectDuration onUserSelect={onHandleInputChange}/>
            <Button className="mt-5 w-full" onClick={handleSubmit}>Create short</Button>
        </div>
        <CustomLoading loading={loading}/>
    </div>
  )
}

export default page