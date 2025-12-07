import React, { useState, useEffect } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import { IoChevronBackCircle } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { PiStepsFill } from "react-icons/pi";
import { MdDeveloperMode } from "react-icons/md";
import { GiInspiration } from "react-icons/gi";
import { MdContactMail } from "react-icons/md";


function Slidebar () {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen((!isOpen));
  };

  useEffect(() => {
    if (isOpen){
      document.body.classList.add("no-scroll")
    } else {
      document.body.classList.remove("no-scroll")
    }
  }, [isOpen])

  return(
    <>
    <header className="sticky top-0 z-50 background-blur-md opacity-90">
      <nav className="bg-white flex justify-between xl:hidden items-center text-white h-16 px-4 backdrop-blur-md">
      <div className="flex justify-between hover:scale-105 transition-all duration-700 backdrop-blur-md ease-in-out px-2 py-2 shrink-0">
        <a href="/" className='font-extrabold hover:bg-green-100 rounded-lg py-2 px-6 text-2xl text-green-900 z-20'>CODE <span className='text-yellow-600 font-extrabold'>चूरू</span></a>
      </div>
      {!isOpen && (
        <div onClick={openMenu} className="xl:hidden text-green-900 cursor-pointer">
          <TfiMenuAlt size={30} />
        </div>
      )}


      {isOpen ? (
        
      <div className="bg-green-800 overflow-y-hidden fixed z-10 top-16 left-0 w-[400px] xl:hidden lg:w-[500px] opacity-99 rounded-r-3xl h-[calc(100vh-4rem)] flex items-center flex-col gap-10 ease-in duration-700">
        <div className="w-full items-center flex flex-col">
          <h1 className="text-6xl font-serif font-bold mr-6 mt-5 mb-4">Menu</h1>
          <div className="w-full h-0.5 bg-green-100"></div>
        </div>
        <div className="absolute top-12 right-5">
          {isOpen && (
            <div onClick={openMenu} className="3xl:hidden text-green-100 cursor-pointer z-20">
              <IoChevronBackCircle size={30} />
            </div>
          )}
        </div>
        <div className="flex flex-col mt-10 gap-7 text-green-100">
        <a href="/" className='relative  text-4xl font-serif font-semibold text-green-100 no-underline after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-green-100 after:transition-all after:duration-500 hover:after:w-full flex items-center'><span className="mr-2"><FaHome /></span> HOME</a>
        <a className='relative  text-4xl font-serif font-semibold text-green-100 no-underline after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-green-100 after:transition-all after:duration-500 hover:after:w-full flex items-center' href="/initiatives"><span className="mr-2"><PiStepsFill /></span> INITIATIVES</a>
        <a className='relative  text-4xl font-serif font-semibold text-green-100 no-underline after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-green-100 after:transition-all after:duration-700 hover:after:w-full flex items-center' href="/inspiration"><span className="mr-2"><GiInspiration /></span> OUR INSPIRATION</a>
        <a className='relative  text-4xl font-serif font-semibold text-green-100 no-underline after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-green-100 after:transition-all after:duration-500 hover:after:w-full flex items-center' href="/developer"><span className="mr-2"><MdDeveloperMode /></span>DEVELOPERs</a>
        <a className='relative  text-4xl font-serif font-semibold text-green-100 no-underline after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-green-100 after:transition-all after:duration-500 hover:after:w-full flex items-center' href="/developer"><span className="mr-2"><MdContactMail /></span> CONTACT Us</a>
        </div>
      </div>

      ) : (

      <div className="bg-gray-800 overflow-y-hidden fixed z-10 top-16 left-[-150%] w-screen h-[calc(100vh-4rem)] flex items-center justify-center flex-col gap-10 ease-in duration-700"></div>
    )}

      {isOpen && (
        <div onClick={openMenu} className="xl:hidden text-green-900 cursor-pointer z-20">
          <IoClose size={30} />
        </div>
      )}
    </nav>
    <div className="bg-green-900 w-full xl:hidden h-1"></div>




    
    </header>
    </>
  )
};

export default Slidebar;