"use client";
import React, { useState } from "react";
import { CiClock1 } from "react-icons/ci";
import { T } from "../interface/type.interface";
import Info from "../data/news.json";
import Card from "./card";
function OnlineLearning() {
  const [info, setInfo] = useState<T[]>(Info.Leaing);
  return (
    <main className="bg-[#F2F6FC] py-20 lg:px-24 xl:px-36 px-2 shadow-inner">
      <section>
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-2 lg:gap-3 ">
            <img
              src="/icons/learning/video-conference.svg"
              alt="video-conference"
              width={50}
              height={50}
            />
            <h1 className="text-[#6849a8] text-[19px] md:text-[23.8px] font-[400]">
              การจัดการเรียนการสอนออนไลน์
            </h1>
            <span className="w-[1px] h-8 hidden md:block bg-[#9a9fa4]"></span>
            <p className="text-[#9a9fa4] hidden md:block text-[18.2px]">
              Online Learning
            </p>
          </div>
          <div>
            <p className="hidden md:text-[17.8px] text-[#0056b3] font-[400] cursor-pointer hover:text-[#af4ce8]">
              ดูทั้งหมด
            </p>
          </div>
        </div>
        <section className="flex justify-center items-center mt-6">
          <Card info={info} />
        </section>
      </section>
    </main>
  );
}

export default OnlineLearning;
