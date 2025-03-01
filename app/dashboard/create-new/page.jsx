'use client'
import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle';
import SelectDuration from './_components/SelectDuration';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import CustomLoading from './_components/CustomLoading';
import { v4 as uuidv4 } from 'uuid';

function page() {
    const scriptData = "Lily, a curious girl, found an old doll in her attic. Its eyes seemed to follow her. She named it Agnes, but strange things started happening. Toys moved, whispers echoed. One night, Lily heard Agnes whisper her name. She turned to see the doll smiling unnervingly. Lily tried to get rid of Agnes, but the doll always reappeared in her room, closer each time. Finally, Agnes stood at the foot of Lily's bed, whispering,"
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({});
    const [videoScript, setVideoScript] = useState({})

    const onHandleInputChange = (fieldName, fieldValue) => {
        console.log(fieldName, fieldValue)
        setFormData(prev => ({
            ...prev,
            [fieldName]: fieldValue
        }))
    }

    const handleSubmit = () => {
        // GetVideoScript();
        // setLoading(true);
        GenerateAudioFile(scriptData);
    }

    const GetVideoScript = async () => {
        setLoading(true);
        const prompt = 'Write a script to generate a '+formData.duration+' video on topic: Interesting '+formData.topic+' along with AI image prompt in'+formData.imageStyle+' format for each scene and give me result in JSON format with imagePrompt and contentText as field, no plain text'
        console.log(prompt)
        const result = await axios.post('/api/get-video-script', {
            prompt: prompt,
        }).then((res) => {
            console.log(res.data.Result);
            setVideoScript(res.data.Result);
            GenerateAudioFile(res.data.Result)
        })
        setLoading(false);
    }

    const GenerateAudioFile = async (videoScriptData) => {
        // let script = '';
        const id = uuidv4();
        // videoScriptData.forEach(item => {
        //     script = script + item.contenttext + ' ';
        // })
        // console.log(script);
        await axios.post('/api/generate-audio', {
            text: videoScriptData,
            id: id
        }).then(resp => console.log(resp.data))
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
        <CustomLoading loading={loading}/>
    </div>
  )
}

export default page