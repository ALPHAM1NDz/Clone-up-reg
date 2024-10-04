import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
function Header() {
  return (
    <main className="px-[40px] py-[8px] bg-[#673AB7] w-full">
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-3 opacity-60">
          <FaFacebook color="white" size={19} />
          <FaInstagram color="white" size={19} />
          <FaYoutube color="white" size={21} />
        </div>
        <div className="opacity-60 text-[14px]">
          <p className="text-white">
            13 ปี มหาวิทยาลัยสร้างปัญญา เพื่อนวัตกรรมชุมชน สู่สากล
          </p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-1 opacity-60 text-[14px]">
            <a href="/" className="text-white">
              <MdEmail />
            </a>
            <p className="text-white">reg@up.ac.th</p>
          </div>
          <div>
            <button className="flex items-center text-white">
              <p>ไทย</p>
              <span>
                <IoMdArrowDropdown />
              </span>
            </button>
          </div>
        </div>
      </nav>
    </main>
  );
}

export default Header;
