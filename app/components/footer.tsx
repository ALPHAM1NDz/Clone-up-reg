import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaRegBookmark,
} from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
function Footer() {
  return (
    <div>
      <footer className="bg-[#3d5061] w-full py-2">
        <section className="flex lg:justify-between flex-col lg:flex-row items-start p-5">
          <div>
            <div className="flex items-start gap-4 lg:w-[400px]">
              <div>
                <img
                  src="/image/footer/logo-reg.png"
                  alt="logo-reg"
                  className="md:w-[110px] w-[80px] "
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-[16.8px] text-white">
                  กองบริการการศึกษา มหาวิทยาลัยพะเยา
                </h3>
                <p className="text-[#b9cddc] text-[13.72px]">
                  19 หมู่ 2 ตำบลแม่กา อำเภอเมืองพะเยา จังหวัดพะเยา 56000
                  โทรศัพท์ : 0 5446 6666 e-mail : reg@up.ac.th
                </p>
                <div className="flex gap-2 mt-1">
                  <div className="p-2 border border-[#b9cddc] rounded-full group cursor-pointer hover:bg-gray-rgba">
                    <FaFacebookF
                      className="text-[#b9cddc] group-hover:text-white"
                      size={15}
                    />
                  </div>
                  <div className="p-2 border border-[#b9cddc] rounded-full group cursor-pointer hover:bg-gray-rgba">
                    <FaInstagram
                      className="text-[#b9cddc] group-hover:text-white"
                      size={15}
                    />
                  </div>
                  <div className="p-2 border border-[#b9cddc] rounded-full group cursor-pointer hover:bg-gray-rgba">
                    <FaYoutube
                      className="text-[#b9cddc] group-hover:text-white"
                      size={15}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col lg:w-[400px] mt-4 lg:mt-0">
              <h3 className="text-[16.8px] text-white">ติดต่อเรา</h3>
              <p className="text-[#b9cddc] text-[13.72px]">
                อาคารสำนักงานอธิการบดี ชั้น 1
                <br />
                - งานทะเบียนนิสิต [หน่วยเอกสาร ต่อ 1021, 1025, 1831]
                [หน่วยตารางสอน ต่อ 1028] [หน่วยบัณฑิต ต่อ 1832]
                <br />
                - งานพัฒนาหลักสูตร ต่อ 1022, 1830
                <br />
                - งานรับเข้าศึกษา ต่อ 1270-3
                <br />
                - งานสนับสนุนวิชาการ ต่อ 1023
                <br />- งานพัฒนาระบบสารสนเทศทางวิชาการ ต่อ 2500
              </p>
            </div>
          </div>
          <div className="lg:w-[500px] hidden xl:block">
            <div>
              <h3 className="text-[16.8px] text-white">ลิงค์ที่เกี่ยวข้อง</h3>
              <p className="flex gap-2 items-center text-[#b9cddc] text-[13.72px]">
                <FaRegBookmark size={14} />
                <span className="hover:text-white cursor-pointer">
                  มหาวิทยาลัยพะเยา
                </span>
              </p>
              <p className="flex gap-2 items-center text-[#b9cddc] text-[13.72px]">
                <FaRegBookmark size={14} />
                <span className="hover:text-white cursor-pointer">
                  กองบริการการศึกษา
                </span>
              </p>
              <p className="flex gap-2 items-center text-[#b9cddc] text-[13.72px]">
                <FaRegBookmark size={14} />
                <span className="hover:text-white cursor-pointer">
                  การรับสมัครบุคคลเข้าศึกษา
                </span>
              </p>
              <p className="flex gap-2 items-center text-[#b9cddc] text-[13.72px]">
                <FaRegBookmark size={14} />
                <span className="hover:text-white cursor-pointer">
                  ระบบฐานข้อมูลหลักสูตร (TQF Online)
                </span>
              </p>
              <p className="flex gap-2 items-center text-[#b9cddc] text-[13.72px]">
                <FaRegBookmark size={14} />
                <span className="hover:text-white cursor-pointer">
                  ระบบจัดการสารสนเทศบัณฑิตศึกษา
                </span>
              </p>
              <p className="flex gap-2 items-center text-[#b9cddc] text-[13.72px]">
                <FaRegBookmark size={14} />
                <span className="hover:text-white cursor-pointer">
                  {" "}
                  ระบบบริหารจัดการวิทยานิพนธ์ (iThesis)
                </span>
              </p>
              <p className="flex gap-2 items-center text-[#b9cddc] text-[13.72px]">
                <IoMdSettings size={14} />
                <span className="hover:text-white cursor-pointer">
                  นโยบายการใช้คุกกี้ | ตั้งค่าคุกกี้
                </span>
              </p>
            </div>
          </div>
        </section>
      </footer>
      <div className="flex lg:justify-between justify-center items-center bg-[#324657] p-3 text-[13.3px] text-[#b9cddc]">
        <div>
          <p>
            Copyright © 2024 All rights reserved. | This template is made with
            by Colorlib
          </p>
        </div>
        <div className="lg:block hidden">
          <p>By Division of Educational Services</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
