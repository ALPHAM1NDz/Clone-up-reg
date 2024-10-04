import React from "react";
import {
  BsPersonVcard,
  BsGraphUpArrow,
  BsCarFrontFill,
  BsCalendar3,
} from "react-icons/bs";

function SmartUp() {
  return (
    <div className="bg-[#f2f6fc] shadow-inner py-[110px]">
      <section className="flex justify-center gap-28">
        <div className="hidden lg:block">
          <img src="/image/smartUp/moblie.png" alt="smartUp" width={300} />
        </div>
        <div>
          <div className="flex flex-col justify-center items-start gap-1 w-[600px] container">
            <p className="text-[#6c757d] text-[13px]">
              โดย ศูนย์บริการเทคโนโลยีสารสนเทศและการสื่อสาร
            </p>
            <h2 className="text-[#6849a8] text-[35px]">
              Smart UP <span className="text-[#dc3545]">v2.0</span>
            </h2>
            <div className="w-[95px] h-[3px] mt-[-10px] bg-[#f97794] rounded-full"></div>
            <div className="block lg:hidden m-2">
              <img src="/image/smartUp/moblie.png" alt="smartUp" width={300} />
            </div>
            <p className="indent-[1.5rem] mt-4 text-[15.4px] leading-[1.8]">
              เปิดโลกดิจิทัลด้วย Smart UP แอปพลิเคชันสำหรับนิสิตมหาวิทยาลัยพะเยา
              เพื่อใช้ในการเข้าถึงบริการออนไลน์และข้อมูลข่าวสารต่าง ๆ
              ของมหาวิทยาลัย ประกอบไปด้วยบริการด้านข้อมูลการศึกษา เช่น
              ข้อมูลตารางเรียน ตารางสอบ ผลการเรียน และปฏิทินการศึกษา บริการอื่น
              ๆ ภายใต้โครงการ Smart UP เช่น ระบบ Smart Transit
              เพื่อตรวจสอบเส้นทางและเวลาของรถเมล์ของมหาวิทยาลัยพะเยาเพื่อรับส่งนิสิต
              นอกจากนั้่นยังจะมีบริการอื่น ๆ อีกมากมายเพิ่มเติมในอนาคต
              ติดตามได้ที่{" "}
              <a href="/" className="text-[#007bff]">
                (http://services.up.ac.th/smartup)
              </a>
            </p>
            <div className="flex items-center gap-4 mt-5">
              <div className="p-4 border border-[#6849a8] rounded-full">
                <BsPersonVcard className="text-[#6849a8]" size={25} />
              </div>
              <div className="flex flex-col">
                <h2 className="text-[#6849a8] font-[400] text-[18px]">
                  Profile
                </h2>
                <p className="text-[14px]">
                  แสดงข้อมูลส่วนตัวและ QR Code
                  เพื่อใช้ในการตรวจสอบชื่อเข้าห้องเรียนและเข้าร่วมกิจกรรมต่างๆ
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-5">
              <div className="p-4 border border-[#6849a8] rounded-full">
                <BsGraphUpArrow className="text-[#6849a8]" size={25} />
              </div>
              <div className="flex flex-col">
                <h2 className="text-[#6849a8] font-[400] text-[18px]">GPA</h2>
                <p className="text-[14px]">
                  บริการตรวจสอบผลการเรียนสำหรับนิสิต
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-5">
              <div className="p-4 border border-[#6849a8] rounded-full">
                <BsCalendar3 className="text-[#6849a8]" size={25} />
              </div>
              <div className="flex flex-col">
                <h2 className="text-[#6849a8] font-[400] text-[18px]">
                  Schedule
                </h2>
                <p className="text-[14px]">บริการตรวจสอบตารางเรียน ตารางสอบ</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-5">
              <div className="p-4 border border-[#6849a8] rounded-full">
                <BsCarFrontFill className="text-[#6849a8]" size={25} />
              </div>
              <div className="flex flex-col">
                <h2 className="text-[#6849a8] font-[400] text-[18px]">
                  Smart bus
                </h2>
                <p className="text-[14px]">
                  ตรวจสอบเส้นทาง สถานะ และระยะเวลาของรถบัสรับส่งภายในมหาวิทยาลัย
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-10">
            <div className="flex gap-6  ">
              <img
                src="/icons/smartup/app_store.svg"
                alt="app_store"
                width={120}
                className="cursor-pointer"
              />
              <img
                src="/icons/smartup/google-play.svg"
                alt="google-play"
                width={131}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SmartUp;
