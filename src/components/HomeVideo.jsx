import React from "react";

const video1 = "/images/3R video.webm";
const video2 = "/images/3R vido2.webm";

const HomeVideo = () => {
  return (
    <div className="w-full bg-[#D9E4DD] p-10 flex gap-10 justify-center mb-10 items-center">

      <div className="overflow-hidden bg-green-800 hidden md:inline-block xl:hidden 2xl:inline-block p-2 rounded-3xl max-w-1/2">
      <video
        className="object-cover rounded-2xl w-full"
        autoPlay
        loop
        muted
        playsInline
        src={video2}></video>
      </div>

      <div className="overflow-hidden bg-green-800 p-2 rounded-3xl max-w-1/2 min-w-[400px]">
      <video
        className="object-cover rounded-2xl w-full"
        autoPlay
        loop
        muted
        playsInline
        src={video1}></video>
      </div>
    </div>
  );
};

export default HomeVideo;