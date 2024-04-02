import React, { useEffect, useState } from 'react'

const DigitalClock = () => {
    const [time,updateTime]=useState(new Date());
    useEffect(()=>{
        //timer updation logic
        const timer = setInterval(()=>{
            updateTime(new Date());
        },1000);
        return () => clearInterval(timer);
    },[]);
  return (
    <div className='size-48'>
        <h1 className='flex justify-center items-center  h-1/3  w-full bg-red-300 font-bold uppercase'>Digital Clock</h1>
        <section className='flex justify-center items-center h-2/3 w-full bg-red-200'>
            <span className='font-bold text-2xl text-stone-800'>{time.toLocaleTimeString()}</span>
        </section>
    </div>
  )
}

export default DigitalClock


// Component Did Mount:
// When you build a new toy (component), `useEffect` is like the first time you play with it. It runs right after the toy is created.
// useEffect(() => {
//      // Special magic when the toy is created!
//    }, []);
// 2. Component Did Update:
// If you change something about your toy, like giving it a new color, `useEffect` helps you do something special after the change.

// useEffect(() => {
//      // Special magic when the toy changes!
//    }, [color]);
// 3. Component Will Unmount:
// When you decide to put a toy away and stop playing with it, `useEffect` helps you clean up and do any last-minute magic.

// useEffect(() => {
//      return () => {
//        // Special magic before the toy is put away!
//      };
//    }, []);