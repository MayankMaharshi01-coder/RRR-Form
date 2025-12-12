import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation'; 
import Hero from '../components/Hero';
import Cards from '../components/Cards';
import Slides from '../components/Slides';

const Reuse = "/images/reuse.png"
const Reduce = "/images/reduce2.png"
const BgImage = "/images/bg.jpg"
const Recycle = "/images/recycle.png"
const TechBg = "/images/techbg.jpg"

const cardData = [
  { 
    id: 1, 
    image: Recycle, 
    name: 'Reduce', 
    post: 'Minimize your consumption at the source; the best waste is the one never created.', 
  },
  { 
    id: 1, 
    image: Recycle, 
    name: 'Recycle', 
    post: 'Give every item a second, third, and fourth life to extend its utility.', 
  },
  { 
    id: 2, 
    image: Reuse, 
    name: 'Reuse', 
    post: 'Close the loop by processing materials into new products to save energy and resources.', 
  },
   { 
    id: 2, 
    image: Reuse, 
    name: 'Reuse', 
    post: 'Close the loop by processing materials into new products to save energy and resources.', 
  },
   { 
    id: 3, 
    image: Reduce, 
    name: 'Reuse', 
    post: 'Close the loop by processing materials into new products to save energy and resources.', 
  },
   { 
    id: 3, 
    image: Reduce, 
    name: 'Reuse', 
    post: 'Close the loop by processing materials into new products to save energy and resources.', 
  },
];

const App = () => {
    
    return (
        <div className='w-full bg-no-repeat bg-cover bg-center shadow-md shadow-green-800' style={{ backgroundImage: `url(${BgImage})` }}>
            
        <div className="h-screen">
          <Hero></Hero>
        </div>

          <div className='flex justify-around p-20 flex-col lg:flex-row bg-linear-to-b w-full h-screen items-center from-green-400 to-green-700'>
            <Cards image={Reduce} name='Reduce' post='Minimize your consumption at the source; the best waste is the one never created.' />
            <Cards image={Recycle} name='Recycle' post='Give every item a second, third, and fourth life to extend its utility.' />
            <Cards image={Reuse} name='Reuse' post='Close the loop by processing materials into new products to save energy and resources.' />               
          </div>


            <div className='flex justify-around items-center p-20 flex-col lg:flex-row bg-no-repeat w-full h-screen bg-cover' style={{ backgroundImage: `url(${TechBg})` }}>
               
            
                
                <div className="w-full max-w-5xl h-[500px] mx-auto">
                    <Swiper
                       
                        modules={[EffectCoverflow, Autoplay, Navigation]} 
                        
                        slidesPerView={3}         
                        effect={'coverflow'}      
                        centeredSlides={true}     
                        loop={true}                              
                        autoplay={{ delay: 2000, disableOnInteraction: false }} 
                        
                        
                        navigation={true} 
                        
                      
                        coverflowEffect={{
                            rotate: 0, 
                            depth: 100, 
                            modifier: 2.5,
                            slideShadows: true,
                        }}
                        
                       
                        className="py-12" 
                    >
                        {cardData.map((card) => (
                            <SwiperSlide key={card.id}>
                                
                                <div className="w-full h-full flex justify-center items-center"> 
                                    <Slides
                                        image={card.image}
                                        name={card.name}
                                        post={card.post}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            
        </div>
    );
};

export default App;
=======
import React, { useContext, useRef, useState } from  "react";
import { AllProductsData } from "../context/AllProducts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";



export default function Welcome () {
  const products = useContext(AllProductsData);
  const [selectedSchool, setselectedSchool] = useState("default");
 const val =  useRef(true)
  const schoolName = useRef([]);
  console.log(products);
  gsap.registerPlugin(useGSAP);
  const {contextSafe} = useGSAP();

     products.forEach((item) => {
      if (!schoolName.current.includes(item.schoolName)) {
        schoolName.current.push(item.schoolName);
      }
    });
    console.log(schoolName);
val.current = false;

   const handleClick = contextSafe(() => {
    console.log("Button Clicked");
    const tl = gsap.timeline();
    tl.to(".welcomePage", {
      duration: 1,
        ease: "power2.inOut",
       y: "100%",
        display: "none",
        rotateX: 90,
        pointerEvents: "none",

    });
    tl.to(".schoolselecter", {
      duration: 1,
        rotateZ: 0,
        ease: "power2.inOut",
        position: "fixed",
  
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
      
    });
  
   });
  return(
    <>
    <div className="relative overflow-x-hidden">
    <div className="welcomePage min-h-screen flex items-center justify-center bg-[#f0f8ef]">
      <button onClick={handleClick} className=" bg-green-800 text-green-100 text-6xl px-40 py-9 rounded-full font-bold font-serif">Get Started</button>
    </div>
    <div className="schoolselecter origin-bottom hidden rotate-z-90 top-0 z-999 min-h-screen w-screen p-0 m-o overflow-hidden items-center justify-center bg-[#54c246]">
   <select ref={val} value={selectedSchool} onChange={(e)=>{setselectedSchool(e.target.value) 
    localStorage.removeItem("schoolName");
    localStorage.setItem("schoolName", e.target.value);
    window.location.href = "/home";
   }} className="mt-20 p-4 rounded-lg text-3xl font-serif border-2 font-bold outline-none">
    <option value="default">Select Your School</option>
    {schoolName.current.map((school, index) => (
      <option key={index} value={school}>{school}</option>
    ))}
   </select>
    </div>
    </div>
    </>
  )
};
>>>>>>> 9ddb8cf1bb35f504e642c10d7acb42ff82f88903
