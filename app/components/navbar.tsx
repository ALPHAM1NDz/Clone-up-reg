"use client";
import React, { useEffect, useState } from "react";
import {
  Transition,
  TransitionChild,
  MenuItem,
  MenuButton,
} from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaFacebookF, FaKey, FaExclamationCircle } from "react-icons/fa";
import { FaBookAtlas } from "react-icons/fa6";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
const Navbar: React.FC = () => {
  const [loginBtn, setLoginBtn] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);
  const [resigterInfo, setResigterInfo] = useState<boolean>(false);
  const [serveInfo, setServeInfo] = useState<boolean>(false);
  const [guideBook, setGuideBook] = useState<boolean>(false);
  const [linkInfo, setLinkInfo] = useState<boolean>(false);
  const [contactInfo, setContactInfo] = useState<boolean>(false);

  return (
    <div className="fixed w-full bg-white z-[9999999999999]">
      <nav className="z-[1000000] flex justify-between items-center md:py-1 md:mx-0 px-3 xl:px-10 xl:w-full lg:w-[auto] lg:px-3 md:w-[auto] lg:text-[15px] md:text-[11px] md:px-4 w-full lg:relative h-[50px]">
        <div>
          <img
            src="https://reg.up.ac.th/images/logo-md.svg"
            alt="logo-up"
            className="cursor-pointer md:w-[150px] lg:w-[190px] w-[150px]"
          />
        </div>
        <div className="lg:flex gap-4 md:gap-2 xl:text-[15px] lg:text-[13px] hidden ">
          <a href="/" className="hover:text-[#673AB7]">
            <p>หน้าเเรก</p>
          </a>
          <a href="/" className="hover:text-[#673AB7] flex items-center group ">
            <p>สมัครเข้าศึกษา</p>
            <IoIosArrowDown />
            <div className="invisible absolute top-[70%] bg-nav-bg text-white py-1 text-[15px] rounded-xl group-hover:visible overflow-hidden">
              <ul className="w-[160px] flex flex-col">
                <li className="block hover:text-yellow-400 hover:bg-nav-bg py-[3px] px-[10px]">
                  การสมัครเข้าศึกษา
                </li>
                <li className="block hover:text-yellow-400 hover:bg-nav-bg py-[3px] px-[10px]">
                  บันทึกทะเบียนประวัติ
                </li>
                <li className="block hover:text-yellow-400 hover:bg-nav-bg py-[3px] px-[10px]">
                  จองหอพักนิสิต
                </li>
              </ul>
            </div>
          </a>
          <a
            href="/"
            className="hover:text-[#673AB7] flex items-center m-0 group"
          >
            <p>บริการวิชาการ</p>
            <IoIosArrowDown />
            <div className="invisible absolute top-[70%] bg-nav-bg text-white py-1 text-[15px] rounded-xl group-hover:visible overflow-hidden">
              <ul className="w-[240px] flex flex-col">
                <li className="block hover:text-yellow-400 hover:bg-nav-bg py-[3px] px-[10px]">
                  ระเบียบ ข้อบังคับ ประกาศ แบบฟอร์ม
                </li>
                <li className="block hover:text-yellow-400 hover:bg-nav-bg py-[3px] px-[10px]">
                  ปฏิทินการศึกษา
                </li>
                <li className="block hover:text-yellow-400 hover:bg-nav-bg py-[3px] px-[10px]">
                  รายวิชาที่เปิดสอน
                </li>
                <li className="block hover:text-yellow-400 hover:bg-nav-bg py-[3px] px-[10px]">
                  ตารางการใช้ห้อง
                </li>
                <li className="block hover:text-yellow-400 hover:bg-nav-bg py-[3px] px-[10px]">
                  ตารางสอนอาจารย์
                </li>
                <li className="block hover:text-yellow-400 hover:bg-nav-bg py-[3px] px-[10px]">
                  ประกาศการสอบต่างๆ
                </li>
                <li className="block hover:text-yellow-400 hover:bg-nav-bg py-[3px] px-[10px]">
                  DynEd (การทดสอบภาษาอังกฤษ)
                </li>
                <li className="block hover:text-yellow-400 hover:bg-nav-bg py-[3px] px-[10px]">
                  ข้อมูลสารสนเทศ
                </li>
              </ul>
            </div>
          </a>
          <a
            href="/"
            className="hover:text-[#673AB7] flex items-center m-0 group"
          >
            <p>คู่มือ</p>
            <IoIosArrowDown />
            <div className="invisible absolute top-[70%] bg-nav-bg text-white py-1 text-[15px] rounded-xl group-hover:visible overflow-hidden">
              <ul className="w-[160px] flex flex-col">
                <li className="block hover:text-yellow-400 hover:bg-nav-bg py-[3px] px-[10px]">
                  คู่มือนิสิต
                </li>
                <li className="block hover:text-yellow-400 hover:bg-nav-bg py-[3px] px-[10px]">
                  คู่มือรับบริการ
                </li>
                <li className="block hover:text-yellow-400 hover:bg-nav-bg py-[3px] px-[10px]">
                  คู่มือการใช้งานระบบ
                </li>
              </ul>
            </div>
          </a>
          <a href="/" className="hover:text-[#673AB7]">
            <p>ประเมินความพึงพอใจ</p>
          </a>
          <a
            href="/"
            className="hover:text-[#673AB7] flex items-center m-0 group"
          >
            <p>ลิงค์ที่เกี่ยวข้อง</p>
            <IoIosArrowDown />
            <div className="invisible absolute top-[70%] bg-nav-bg text-white py-1 text-[15px] rounded-xl group-hover:visible overflow-hidden">
              <ul className="w-[240px] flex flex-col">
                <li className="block hover:text-yellow-400 hover:bg-nav-bg py-[3px] px-[10px]">
                  มหาวิทยาลัยพะเยา
                </li>
                <li className="block hover:text-yellow-400 hover:bg-nav-bg py-[3px] px-[10px]">
                  กองบริการการศึกษา
                </li>
                <li className="block hover:text-yellow-400 hover:bg-nav-bg py-[3px] px-[10px]">
                  การรับสมัครบุคคลเข้าศึกษา
                </li>
                <li className="block hover:text-yellow-400 hover:bg-nav-bg py-[3px] px-[10px]">
                  ระบบฐานข้อมูลหลักสูตร (TQF Online)
                </li>
                <li className="block hover:text-yellow-400 hover:bg-nav-bg py-[3px] px-[10px]">
                  ระบบจัดการสารสนเทศบัณทิตศึกษา
                </li>
                <li className="block hover:text-yellow-400 hover:bg-nav-bg py-[3px] px-[10px]">
                  ระบบบริหารจัดการวิทยานิพนธ์ (iThesis)
                </li>
                <li className="block hover:text-yellow-400 hover:bg-nav-bg py-[3px] px-[10px]">
                  ระบบบริหารจัดการสหกิจศึกษา
                </li>
                <li className="block hover:text-yellow-400 hover:bg-nav-bg py-[3px] px-[10px]">
                  ระบบลงทะเบียนบัณทิตออนไลน์
                </li>
                <li className="block hover:text-yellow-400 hover:bg-nav-bg py-[3px] px-[10px]">
                  ระบบประกันคุณภาพการศึกษา
                </li>
                <li className="block hover:text-yellow-400 hover:bg-nav-bg py-[3px] px-[10px]">
                  ระบบการรายงานผล
                </li>
              </ul>
            </div>
          </a>
          <a
            href="/"
            className="hover:text-[#673AB7] flex items-center m-0 group"
          >
            <p>ติดต่อเรา</p>
            <IoIosArrowDown />
            <div className="invisible absolute top-[70%] bg-nav-bg text-white py-1 text-[15px] rounded-xl group-hover:visible overflow-hidden">
              <ul className="w-[160px] flex flex-col">
                <li className="block hover:text-yellow-400 hover:bg-nav-bg py-[3px] px-[10px]">
                  ที่อยู่
                </li>
                <li className="block hover:text-yellow-400 hover:bg-nav-bg py-[3px] px-[10px]">
                  คำถามที่พบบ่อย
                </li>
                <li className="block hover:text-yellow-400 hover:bg-nav-bg py-[3px] px-[10px]">
                  เเนะนำติชม
                </li>
                <li className="block hover:text-yellow-400 hover:bg-nav-bg py-[3px] px-[10px]">
                  เเจ้งปัญหาการใช้งาน
                </li>
              </ul>
            </div>
          </a>
        </div>
        <div className="overflow-hidden group flex items-center">
          <button
            className="flex items-center lg:gap-2 lg:border lg:border-[#007BFF] lg:border-solid lg:rounded-md text-[#007BFF] py-[1px] px-2  lg:hover:bg-[#007BFF] focus:outline-none"
            onClick={() => setLoginBtn((loginBtn) => !loginBtn)}
          >
            <IoPersonCircleOutline
              size={35}
              className="lg:group-hover:text-white"
            />
            <p className="lg:group-hover:text-white lg:block hidden">
              เข้าสู่ระบบ
            </p>
          </button>

          <RxHamburgerMenu
            className="ml-2 cursor-pointer lg:hidden block"
            size={20}
            onClick={() => setMenu((menu) => !menu)}
          />
        </div>
        <Transition
          as="div"
          className="absolute bg-white p-4 top-12 right-1 xl:right-10 lg:right-4 rounded-md border-t-[3px] border-[#42A5F5] flex flex-col gap-4 justify-center items-center w-[350px]"
          show={loginBtn}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {loginBtn && (
            <div className="flex flex-col gap-4">
              <img
                src="image/logo-login.png"
                alt="Logologin"
                className="w-[100px]"
              />
              <p>Sign in with your UP Account</p>
              <div className="w-full">
                <div className="relative w-full min-w-[200px] h-10">
                  <input
                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-[#B8E6FC] focus:bg-[#E8F0FE]"
                    placeholder=" "
                  />
                  <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-[#B8E6FC] before:border-[#B8E6FC]peer-focus:before:!border-[#B8E6FC] after:border-[#B8E6FC] peer-focus:after:!border-[#B8E6FC]">
                    ชื่อผู้ใช้
                  </label>
                </div>
              </div>
              <div className="w-full">
                <div className="relative w-full min-w-[200px] h-10">
                  <input
                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-[#B8E6FC]
                            focus:bg-[#E8F0FE]"
                    placeholder=" "
                  />
                  <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-[#B8E6FC] before:border-[#B8E6FC]peer-focus:before:!border-[#B8E6FC] after:border-[#B8E6FC] peer-focus:after:!border-[#B8E6FC]">
                    รหัสผ่าน
                  </label>
                </div>
              </div>
              <button className="bg-[#007bff] py-1 px-2 rounded-md text-white w-full hover:bg-[#0069d9]">
                เข้าใช้งานระบบ
              </button>
              <p className="text-gray-500">หรือ</p>
              <button className="bg-white text-red-500 py-1 px-2 rounded-md w-full hover:bg-[#dc3545] hover:text-white border-[1px] border-[#dc3545]">
                Login with Office 365
              </button>
              <div className="grid grid-cols-2 gap-2 text-[12px]">
                <div className="flex justify-start items-center gap-2 cursor-pointer hover:text-[#007bff]">
                  <FaKey />
                  <p>ลืมรหัส</p>
                </div>
                <div className="flex justify-start items-center gap-2 cursor-pointer hover:text-[#007bff]">
                  <FaBookAtlas />
                  <p>เปลื่ยนรหัสผ่าน</p>
                </div>
                <div className="flex justify-start items-center gap-2 cursor-pointer hover:text-[#007bff]">
                  <FaExclamationCircle />
                  <p>คำแนะนำสำหรับศิษย์เก่า</p>
                </div>
              </div>
            </div>
          )}
        </Transition>
        <Transition
          as="div"
          className="absolute top-10 left-0 w-full"
          show={menu}
          enter="transition-all duration-300"
          enterFrom="translate-y-0"
          enterTo="translate-y-1"
          leave="transition-all duration-300"
          leaveFrom="translate-y-2"
          leaveTo="translate-y-0"
        >
          {menu && (
            <div className=" z-[100] h-[600px] overflow-y-scroll">
              <div className="flex justify-between p-2 bg-white">
                <div className="flex gap-2">
                  <img
                    src="/icons/social-icon/facebook-circle.svg"
                    alt="facebook"
                    width={30}
                  />
                  <img
                    src="/icons/social-icon/instagram.svg"
                    alt="instagram"
                    width={30}
                  />
                  <img
                    src="/icons/social-icon/youtube.svg"
                    alt="youtube"
                    width={30}
                  />
                  <img
                    src="/icons/social-icon/mail.svg"
                    alt="mail"
                    width={30}
                  />
                </div>
                <div className="flex gap-2">
                  <img src="/icons/flag/th.svg" alt="youtube" width={30} />
                  <img
                    src="/icons/flag/en.svg"
                    alt="mail"
                    width={30}
                    className="opacity-60"
                  />
                </div>
              </div>
              <div className="bg-[#7748a6] py-1 text-[15px] text-white flex flex-col gap-4">
                <p className="px-4">หน้าหลัก</p>
                <div>
                  <div
                    className="px-4 flex justify-between items-center"
                    onClick={() => setResigterInfo(!resigterInfo)}
                  >
                    <p>สมัครเข้าศึกษา</p>
                    {resigterInfo ? (
                      <MdKeyboardArrowDown size={25} />
                    ) : (
                      <MdKeyboardArrowRight size={25} />
                    )}
                  </div>
                </div>
                <Transition
                  as="span"
                  className="p-0 m-0"
                  show={resigterInfo}
                  enter="transition-all duration-300"
                  enterFrom="translate-y-0"
                  enterTo="translate-y-1"
                  leave="transition-all duration-300"
                  leaveFrom="translate-y-2"
                  leaveTo="translate-y-0"
                >
                  {resigterInfo && (
                    <div className="flex flex-col gap-3 px-8 py-2 bg-[#8B63B3] w-full ">
                      <p>การสมัครเข้าศุกษา</p>
                      <p>บันทึกทะเบียนประวัติ</p>
                      <p>จองหอพักนิสิต</p>
                    </div>
                  )}
                </Transition>
                <div
                  className="px-4 flex justify-between items-center transition-all"
                  onClick={() => setServeInfo(!serveInfo)}
                >
                  <p>บริการวิชาการ</p>
                  {serveInfo ? (
                    <MdKeyboardArrowDown size={25} />
                  ) : (
                    <MdKeyboardArrowRight size={25} />
                  )}
                </div>
                <Transition
                  as="span"
                  className="p-0 m-0"
                  show={serveInfo}
                  enter="transition-all duration-300"
                  enterFrom="translate-y-0"
                  enterTo="translate-y-1"
                  leave="transition-all duration-300"
                  leaveFrom="translate-y-1"
                  leaveTo="translate-y-0"
                >
                  {serveInfo && (
                    <div className="flex flex-col gap-3 px-8 py-2 bg-[#8B63B3] w-full transition-all translate-y-0">
                      <p>รายวิชาที่เปิดสอน</p>
                      <p>ปฏิทินการศึกษา</p>
                      <p>ระเบียบ | ข้อบังคับ | ประกาศ | แบบฟอร์ม</p>
                      <p>ตารางการใช้ห้อง</p>
                      <p>ตารางสอนอาจารย์</p>
                      <p>ประกาศสอบต่าง ๆ</p>
                      <p>DynEd (การทดสอบภาษาอังกฤษ)</p>
                      <p>ข้อมูลสารสนเทศ</p>
                    </div>
                  )}
                </Transition>
                <div
                  className="px-4 flex justify-between items-center"
                  onClick={() => setGuideBook(!guideBook)}
                >
                  <p>คู่มือ</p>
                  {guideBook ? (
                    <MdKeyboardArrowDown size={25} />
                  ) : (
                    <MdKeyboardArrowRight size={25} />
                  )}
                </div>
                <Transition
                  as="span"
                  className="p-0 m-0"
                  show={guideBook}
                  enter="transition-all duration-300"
                  enterFrom="translate-y-0"
                  enterTo="translate-y-1"
                  leave="transition-all duration-300"
                  leaveFrom="translate-y-1"
                  leaveTo="translate-y-0"
                >
                  {guideBook && (
                    <div className="flex flex-col gap-3 px-8 py-2 bg-[#8B63B3] w-full ">
                      <p>คู่มือนิสิต</p>
                      <p>คู่มือรับบริการ</p>
                      <p>คู่มือการใช้งานระบบ</p>
                    </div>
                  )}
                </Transition>
                <p className="px-4">ประเมินความพึงพอใจ</p>
                <div
                  className="px-4 flex justify-between items-center"
                  onClick={() => setLinkInfo(!linkInfo)}
                >
                  <p>สิงที่เกี่ยวข้อง</p>
                  {linkInfo ? (
                    <MdKeyboardArrowDown size={25} />
                  ) : (
                    <MdKeyboardArrowRight size={25} />
                  )}
                </div>
                <Transition
                  as="span"
                  className="p-0 m-0"
                  show={linkInfo}
                  enter="transition-all duration-300"
                  enterFrom="translate-y-0"
                  enterTo="translate-y-1"
                  leave="transition-all duration-300"
                  leaveFrom="translate-y-1"
                  leaveTo="translate-y-0"
                >
                  {linkInfo && (
                    <div className="flex flex-col gap-3 px-8 py-2 bg-[#8B63B3] w-full ">
                      <p>มหาวิทยาลัยพะเยา</p>
                      <p>กองบริการการศึกษา</p>
                      <p>การรับสมัครบุคคลเข้าศึกษา</p>
                      <p>ระบบฐานข้อมูลหลักสูตร (TQF Online)</p>
                      <p>ระบบจัดการสารสนเทศบัณฑิตศึกษา</p>
                      <p>ระบบบริหารจัดการวิทยานิพนธ์ (iThesis)</p>
                      <p>ระบบบริหารจัดการสหกิจศึกษา</p>
                      <p>ระบบลงทะเบียนบัณฑิตออนไลน์</p>
                      <p>ระบบประกันสุขภาพการศึกษา</p>
                      <p>ระบบการรายผล</p>
                    </div>
                  )}
                </Transition>
                <div
                  className="px-4 flex justify-between items-center"
                  onClick={() => setContactInfo(!contactInfo)}
                >
                  <p>ติดต่อเรา</p>
                  {contactInfo ? (
                    <MdKeyboardArrowDown size={25} />
                  ) : (
                    <MdKeyboardArrowRight size={25} />
                  )}
                </div>
                <Transition
                  as="span"
                  className="p-0 m-0"
                  show={contactInfo}
                  enter="transition-all duration-300"
                  enterFrom="translate-y-0"
                  enterTo="translate-y-1"
                  leave="transition-all duration-300"
                  leaveFrom="translate-y-1"
                  leaveTo="translate-y-0"
                >
                  {contactInfo && (
                    <div className="flex flex-col gap-3 px-8 py-2 bg-[#8B63B3] w-full ">
                      <p>ที่อยู่</p>
                      <p>คำถามที่พบบ่อย</p>
                      <p>แนะนำติชม</p>
                      <p>เเจ้งปัญหาการใช้งาน</p>
                    </div>
                  )}
                </Transition>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Navbar;
