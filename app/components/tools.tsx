import React from "react";
import Table from "./table";

function Tools() {
  return (
    <div className="py-20 w-full lg:px-16 px-2">
      <section>
        <div className="flex items-center gap-4">
          <img
            src="/icons/svg-tools/lives.svg"
            alt="lives"
            width={50}
            height={50}
          />
          <h1 className="md:text-[1.5rem] text-[#6849A8]">
            Application : การเรียนการสอนออนไลน์
          </h1>
          <span className="w-[1px]  h-8 bg-[#9a9fa4] hidden md:block"></span>
          <p className="text-[#9a9fa4] text-[18.2px] hidden md:block">
            Online Learning
          </p>
        </div>
      </section>
      <Table />
    </div>
  );
}

export default Tools;
