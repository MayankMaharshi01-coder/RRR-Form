import React from 'react'

const Video = "/images/new.webm"

const Hero = () => {
  return (
    <><div className='flex justify-around flex-col md:flex-row h-full items-center'>
      <div className='w-[400px] md:w-2xl flex gap-10 flex-col items-center justify-center h-screen md:p-5'>
    <h1 className='  text-white  md:text-5xl text-[33px] font-serif font-bold transition-transform duration-500 hover:scale-105'>
      Welcome To RRR Portal 💐
    </h1>
    <p className='text-white hover:text-black '>
       Our innovative path to a sustainable world.
    </p>
    <button className='animate-bounce hover:animate-in hover:bg-linear-to-r hover:from-green-800 hover:to-green-400 shadow-xl shadow-green-800 hover:border-2  bg-linear-to-r from-green-400 to-green-800 text-white p-3 w-sm rounded-full text-xl transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl active:translate-y-0 active:shadow-md active:shadow-black hover:scale-105 '>
      Get Started
    </button>
    </div>
    <div className='w-sm  md:w-xl flex items-center justify-center pb-5 md:p-7'>
    <video className='shadow-xl shadow-green-800 md:mt-40 rounded-2xl  transition-transform duration-500 hover:scale-105' src={Video} loop muted autoplay="autoplay"></video>
    </div>
    </div>
    
    </>
  )
}

export default Hero