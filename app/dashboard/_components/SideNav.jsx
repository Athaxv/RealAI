"use client"
import { CircleUserIcon, FileVideo, PanelsTopLeft, ShieldIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function SideNav() {
    const path = usePathname();
    const MenuOption = [
        {
            id: 1,
            name: 'Dashboard',
            path: '/dashboard',
            icon: PanelsTopLeft
        },
        {
            id: 2,
            name: 'Create New',
            path: '/create-new',
            icon: FileVideo
        },
        {
            id: 3,
            name: 'Upgrade',
            path: '/upgrade',
            icon: ShieldIcon
        },
        {
            id: 4,
            name: 'Account',
            path: '/account',
            icon: CircleUserIcon
        },
    ]
  return (
    <div className='w-64 h-screen shadow-md p-5'>
        <div className='grid gap-4'>
            {MenuOption.map((item, index) => (
                <Link href={item.path} key={index}>
                <div className={`flex items-center p-3 gap-3 hover:bg-secondary rounded-md cursor-pointer ${path==item.path && "bg-primary"}`}>
                    <item.icon/>    
                    <h2>{item.name}</h2>
                </div>
                </Link>
            ) )}
        </div>
    </div>
  )
}

export default SideNav