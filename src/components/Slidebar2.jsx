import React from "react";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { PiStepsFill } from "react-icons/pi";
import { MdDeveloperMode } from "react-icons/md";
import { GiInspiration } from "react-icons/gi";
import { MdContactMail } from "react-icons/md";
import { FaSchool } from "react-icons/fa6";
import { FaFileContract } from "react-icons/fa6";


const Slidebar2 = () => {


  return (
    <>
      <aside className="hidden xl:flex flex-col absolute top-0 min-h-screen z-50 shadow-2xl shadow-green-950 bottom-0 min-w-[450px] text-green-100">
        <div className="sticky top-0 min-h-screen bg-green-800">
          <div className="flex justify-center items-center hover:scale-105 transition-all duration-700  ease-in-out px-2 py-2 shrink-0">
        <a href="/" className='font-extrabold hover:bg-green-100 hover:text-green-900 rounded-lg py-2 px-6 text-2xl text-green-100 z-20'>CODE <span className='text-yellow-600 font-extrabold'>चूरू</span></a>
      </div>
          <div className="w-full h-0.5 bg-green-100"></div>

        <div className="w-full items-center flex flex-col">
          <h1 className="text-6xl font-serif font-bold mr-6 mt-5 mb-4">Menu</h1>
          <div className="w-full h-0.5 bg-green-100"></div>
        </div>
        <nav className="flex flex-col gap-10 ml-10 mt-10">
          <div className="max-w-fit">
            <a href="/" className='relative text-3xl font-serif font-semibold text-green-100 no-underline after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-green-100 after:transition-all after:duration-300 hover:after:w-full flex items-center'><span className="mr-4"><FaHome /></span> HOME</a>
          </div>
          <div className="max-w-fit">
            <a className='relative  text-3xl font-serif font-semibold text-green-100 no-underline after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-green-100 after:transition-all after:duration-300 hover:after:w-full flex items-center' href="/yourSchool"><span className="mr-4"><FaSchool /></span> YOUR SCHOOL</a>
          </div>
          <div className="max-w-fit">
            <a className='relative  text-3xl font-serif font-semibold text-green-100 no-underline after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-green-100 after:transition-all after:duration-300 hover:after:w-full flex items-center' href="/schoolContribution"><span className="mr-4"><FaFileContract /></span> LEADERBOARD</a>
          </div>
          <div className="max-w-fit">
            <a className='relative  text-3xl font-serif font-semibold text-green-100 no-underline after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-green-100 after:transition-all after:duration-300 hover:after:w-full flex items-center' href="/initiatives"><span className="mr-4"><PiStepsFill /></span> INITIATIVES</a>
          </div>
          <div className="max-w-fit">
            <a className='relative  text-3xl font-serif font-semibold text-green-100 no-underline after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-green-100 after:transition-all after:duration-300 hover:after:w-full flex items-center' href="/inspiration"><span className="mr-4"><GiInspiration /></span> OUR INSPIRATION</a>
          </div>
          <div className="max-w-fit">
            <a className='relative  text-3xl font-serif font-semibold text-green-100 no-underline after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-green-100 after:transition-all after:duration-300 hover:after:w-full flex items-center' href="/developer"><span className="mr-4"><MdDeveloperMode /></span> DEVELOPERs</a>
          </div>
          <div className="max-w-fit">
            <a className='relative  text-3xl font-serif font-semibold text-green-100 no-underline after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-green-100 after:transition-all after:duration-300 hover:after:w-full flex items-center' href="/contact"><span className="mr-4"><MdContactMail /></span> CONTACT Us</a>
          </div>
        </nav>
        </div>
      </aside>
    </>
  );
};

export default Slidebar2;