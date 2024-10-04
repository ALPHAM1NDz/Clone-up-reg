"use client";
import React, { useState } from "react";
import Card from "./card";
import Info from "../data/news.json";
import { T } from "../interface/type.interface";

function News() {
  const [info, setInfo] = useState<T[]>(Info.newsData);
  console.log(Info.newsData);

  return (
    <main className="bg-[#F2F6FC] mt-8 lg:pb-64 pb-20">
      <section className="container flex justify-between items-center mx-auto pt-12 pb-4 w-[80%]">
        <div className="flex items-center relative">
          <h1 className="text-[1.7rem] text-[#673AB7]">ข่าวล่าสุด</h1>
          <p className="ml-[0.5rem] text-[#969BA0]">| Latest News</p>
          <div className="absolute top-10 w-[40px] h-[3px] bg-[#F97794] rounded-full"></div>
        </div>
        <div>
          <p className="text-[#007BFF] font-bold cursor-pointer hover:text-[#673AB7] transition-all">
            ดูทั้งหมด
          </p>
        </div>
      </section>
      <section className="flex justify-center items-center">
        <Card info={info} />
      </section>
    </main>
  );
}

export default News;
