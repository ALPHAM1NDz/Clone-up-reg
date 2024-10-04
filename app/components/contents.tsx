"use client";
import React, { useState } from "react";
import CardContent from "./cardContent";
import Contentdetails from "../data/news.json";
function Contents() {
  const [details] = useState(Contentdetails.Contentdetails);

  return (
    <main className="md:flex md:flex-row justify-center items-center gap-4 md:gap-2 xl:gap-8 xl:w-auto md:w-auto m-[60px] md:py-2 md:px-[15px] flex flex-col">
      <CardContent details={details} />
    </main>
  );
}

export default Contents;
