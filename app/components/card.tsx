"use client";
import React, { useState } from "react";
import { CiClock1 } from "react-icons/ci";
import { T } from "../interface/type.interface";

interface ICardProps {
  info: T[];
}
const Card = (info: ICardProps) => {
  console.log(info);

  return (
    <main>
      <section className="container flex lg:justify-center items-start gap-4 lg:gap-8 lg:flex-wrap overflow-x-scroll lg:overflow-hidden md:pb-32 lg:pb-0">
        {info.info.map((info, index: number) => (
          <div
            key={index}
            className=" bg-white lg:w-[380px] w-[420px] p-5 h-auto lg:p-[15px] rounded-[4px] shadow-md relative snap-start"
          >
            <div className="overflow-hidden lg:w-[350px] w-[270px]">
              <img
                src={`${info.image}`}
                alt="image"
                className="cursor-pointer hover:scale-110 transition-all ease-in duration-300 "
              />
            </div>
            <p className="my-3 w-[270px] lg:w-[350px] text-[16px] text-[#673AB7] cursor-pointer font-bold hover:text-[#f57c00]">
              {info.title}
            </p>
            <div className="flex items-center gap-2 text-xs">
              <p
                className={`${
                  info.detailStatus ? "text-[#007BFF]" : "text-[#DC3545]"
                }`}
              >
                {info.detail}
              </p>
              <CiClock1 className="text-[#969BA0]" />
              <p className="text-[#969BA0]">{info.date}</p>
            </div>
            {info.isNew && (
              <div className="absolute right-[15px] top-3 bg-red-500 text-white py-1 px-3 rounded-tl-md rounded-tr-md rounded-bl-md">
                <p className="text-xs">New</p>
              </div>
            )}
          </div>
        ))}
      </section>
    </main>
  );
};

export default Card;
