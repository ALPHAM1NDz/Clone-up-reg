'use client'
import React, { useState } from "react";
import Annoynce from "../data/news.json"

function Announce() {
    const [card,setCard] = useState(Annoynce)

  return (
    <main className="relative drop-shadow-md ">
        <div className="absolute md:top-[-20px] top-[-40px] translate-x-[50%] right-[50%] w-[95%] md:w-96 z-50 md:translate-x-[50%] md:right-[50%] bg-[#42a5f5] text-white text-[1.25rem] px-10 py-1 rounded-tl-xl rounded-tr-md rounded-bl-md rounded-br-xl text-center">
            <p>ประกาศมหาวิทยาลัยพะเยา</p>
        </div>
        <section className="flex flex-col md:flex-row justify-center items-start bg-white lg:w-[900px] xl:w-[1100px] md:w-[700px] text-center ">
            {card.Annoynce.map((items,index:number) => (
                <div key={index} className="flex flex-col justify-center items-center gap-1 border border-solid border-[#DEE2E6] xl:w-72 lg:p-[1.5rem] p-[1.5rem] w-full cursor-pointer relative md:h-[100%] group">
                    <img src={`${items.img}`} alt="logo-calendar" width={80} height={80} className="group-hover:drop-shadow-xl" />
                    <p className="text-[1.2rem] text-[#007BFF] group-hover:text-[#af4ce8]">{items.title}</p>
                    <p className="text-[0.8rem] text-[#6C757D]">{items.date}</p>
                    {items.isNew &&
                    <div className="absolute p-1 bg-red-500 rounded-md right-[35%] top-5">
                        <p className="text-white text-[12px]">New</p>
                    </div>}
                </div>
            ))}
        </section>
    </main>
  );
}

export default Announce;
