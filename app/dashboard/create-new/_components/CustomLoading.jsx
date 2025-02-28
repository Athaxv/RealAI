import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import Image from 'next/image'
  

function CustomLoading({loading}) {
  return (
    <AlertDialog open={loading}>
  {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
  <AlertDialogContent className="w-[200px] rounded-md h-40" AlertDialogTitle=''>      
    <div className='bg-white flex flex-col items-center justify-center'>
    <Image src={'/truck.gif'} height={50} width={50} alt='truck'/>
    <h2>Generating...</h2>
    </div>
  </AlertDialogContent>
</AlertDialog>

  )
}

export default CustomLoading