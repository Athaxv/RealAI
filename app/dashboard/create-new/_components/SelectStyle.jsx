import Image from 'next/image'
import React, { useState } from 'react'

function SelectStyle({ onUserSelect }) {
    const styleOptions = [
        {
            name: 'Realistic',
            image: '/real.jpg'
        },
        {
            name: 'Cartoon',
            image: '/cartoon.jpg'
        },
        {
            name: 'Comic',
            image: '/comic.jpg'
        },
        {
            name: 'Animated',
            image: '/anime.jpg'
        },
        {
            name: 'GTA',
            image: '/gta.jpg'
        },
        {
            name: 'Roblox',
            image: '/roblox.jpg'
        },
    ]
    const [selectedOption, setSelectedOption] = useState();
    const handleBlur = () => {
        if (selectedOption){
            setSelectedOption(null)
        }
    }
  return (
    <div>
        <h2 className='font-bold text-2xl text-primary mt-5'>Style</h2>
        <p className='text-gray-500'>Select your Video style</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5 mt-3'>
            {styleOptions.map((item, index) => (
                <div key={item.name} onBlur={() => handleBlur()} tabIndex={0} onClick={() => {
                    setSelectedOption(item.name)
                    onUserSelect('imageStyle', item.name)
                }} className={`hover:scale-105  transition-all cursor-pointer ${selectedOption==item.name ? 'blur-sm opacity-70' : ''}`} >
                    <Image src={item.image} width={100} height={100} className='h-40 object-cover rounded-lg w-full' 
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default SelectStyle