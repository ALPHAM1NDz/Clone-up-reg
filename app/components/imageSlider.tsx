"use client";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function ImageSlider() {
  const slides = [
    { url: "https://reg.up.ac.th/uploads/content/65f150cd93310.png" },
    { url: "https://reg.up.ac.th/uploads/content/65f15ed68c931.png" },
    { url: "https://reg.up.ac.th/uploads/content_picture/632808cb0b633.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const ifFirstSlide = currentIndex === 0;
    const newIndex = ifFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const ifLastSlide = currentIndex === slides.length - 1;
    const newIndex = ifLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <>
      <div className="xl:w-auto relative mb:w-auto z-[0] mt-10">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-[26.5rem] rounded-wxl bg-center bg-cover duration-500 object-cover bg-no-repeat"
        ></div>
        <div className="absolute group -translate-x-0 translate-y-[-50%] top-52 left-5 text-2xl rounded-full p-2 bg-white cursor-pointer opacity-30 hover:opacity-100 transition-all">
          <IoIosArrowBack
            onClick={prevSlide}
            className="group-hover:text-[#A34BA6] transition-all"
            size={30}
          />
        </div>
        <div className="absolute group -translate-x-0 translate-y-[-50%] top-52 right-5 text-2xl rounded-full p-2 bg-white cursor-pointer opacity-30 hover:opacity-100 transition-all">
          <IoIosArrowForward
            onClick={nextSlide}
            className="group-hover:text-[#A34BA6] transition-all"
            size={30}
          />
        </div>
      </div>
    </>
  );
}

export default ImageSlider;
