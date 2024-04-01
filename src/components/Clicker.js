import React, { useState } from 'react'

const Clicker = () => {
    const [num,setNum]=useState(0);

  return (
    <div className='bg-slate-200  size-48'>
        <div className='flex justify-center items-center h-3/4 w-full'>
            <p className='text-[48px] font-bold'>{num}</p>
        </div>
        <div className='h-1/4 flex gap-5 justify-center items-center bg-slate-300'>
            <p className='cursor-pointer hover:animate-bounce text-4xl' onClick={()=>setNum(num+1)} >&#128316;</p>
            <p className='cursor-pointer hover:animate-bounce text-4xl' onClick={()=>setNum(0)} >&#128260;</p>
            <p className='cursor-pointer hover:animate-bounce text-4xl' onClick={()=>setNum(Math.max(0,num-1))} >&#128317;</p>
        </div>
    </div>
  )
}

export default Clicker