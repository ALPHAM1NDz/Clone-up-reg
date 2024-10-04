import React from "react";

function Table() {
  return (
    <div className="mt-6 overflow-scroll lgw:overflow-hidden">
      <table className="w-full">
        <thead className="bg-[#fafafa] border-y-2 border-[#E1E5E8] ">
          <tr className="flex justify-between w-full lg:gap-18 px-12 ">
            <th className="w-[200px]"></th>
            <th className="flex justify-center items-center flex-col p-4 w-[200px]">
              <img src="/icons/svg-tools/msteam.svg" alt="msteam" />
              <p>Microsoft Teams</p>
            </th>
            <th className="flex justify-center items-center flex-col p-4 w-[200px]">
              <img src="/icons/svg-tools/zoom.jpg" alt="zoom" width={48} />
              <p>Zoom</p>
            </th>
            <th className="flex justify-center items-center flex-col p-4 w-[200px]">
              <img
                src="/icons/svg-tools/googlemeet.png"
                alt="googlemeet"
                width={45}
              />
              <p>Google Meet</p>
            </th>
          </tr>
        </thead>
        <tbody className="snap-start">
          <tr className="flex justify-between w-full gap-18 px-12 text-[14px] border-b-2 border-[#E1E5E8] hover:bg-[#fafafa] ">
            <td className="flex justify-center items-center flex-col p-4 w-[200px]">
              <img src="/icons/svg-tools/1.svg" alt="1" width={45} />
              <br />
              <p>การใช้งานผ่านเว็บ</p>
            </td>
            <td className="flex justify-center items-center flex-col p-4 w-[200px]">
              <p>ใช้งานผ่านเว็บได้</p>
            </td>
            <td className="flex justify-center items-center flex-col p-4 w-[200px]">
              <p>-</p>
            </td>
            <td className="flex justify-center items-center flex-col p-4 w-[200px]">
              <p>ใช้งานผ่านเว็บได้</p>
            </td>
          </tr>
          <tr className="flex justify-between w-full gap-18 px-12 text-[14px] border-b-2 border-[#E1E5E8] hover:bg-[#fafafa]">
            <td className="flex justify-center items-center flex-col p-4 w-[200px]">
              <img src="/icons/svg-tools/2.svg" alt="2" width={45} />
              <br />
              <p>การใช้งานผ่าน Smart Phone</p>
            </td>
            <td className="flex justify-center items-center p-4 w-[200px] gap-2">
              <img src="/icons/svg-tools/apple.png" alt="apple" width={35} />
              <img
                src="/icons/svg-tools/android.png"
                alt="android"
                width={35}
              />
              <img
                src="/icons/svg-tools/microsoft.png"
                alt="microsoft"
                width={35}
              />
            </td>
            <td className="flex justify-center items-center p-4 w-[200px] gap-2">
              <img src="/icons/svg-tools/apple.png" alt="apple" width={35} />
              <img
                src="/icons/svg-tools/android.png"
                alt="android"
                width={35}
              />
              <img
                src="/icons/svg-tools/microsoft.png"
                alt="microsoft"
                width={35}
              />
            </td>
            <td className="flex justify-center items-center p-4 w-[200px] gap-2">
              <img src="/icons/svg-tools/apple.png" alt="apple" width={35} />
              <img
                src="/icons/svg-tools/android.png"
                alt="android"
                width={35}
              />
              <img
                src="/icons/svg-tools/microsoft.png"
                alt="microsoft"
                width={35}
              />
            </td>
          </tr>
          <tr className="flex justify-between w-full gap-18 px-12 text-[14px] border-b-2 border-[#E1E5E8] hover:bg-[#fafafa]">
            <td className="flex justify-center items-center flex-col py-4 w-[200px]">
              <img src="/icons/svg-tools/3.svg" alt="3" width={45} />
              <br />
              <p>การแชร์ หน้าจอแชร์เป็น Video</p>
            </td>
            <td className="flex flex-col justify-center items-center p-4 w-[200px] gap-7">
              <img
                src="/icons/svg-tools/microsoftstream.png"
                alt="microsoftstream"
                width={40}
              />
              <p>Microsoft Stream</p>
            </td>
            <td className="flex flex-col justify-center items-center p-4 w-[200px] gap-6    ">
              <img src="/icons/svg-tools/zoom.jpg" alt="zoom" width={40} />
              <p>Zoom Cloud</p>
            </td>
            <td className="flex flex-col justify-center items-center p-4 w-[200px] gap-6">
              <img
                src="/icons/svg-tools/googledrive.png"
                alt="googledrive"
                width={40}
              />
              <p>Google Drive</p>
            </td>
          </tr>
          <tr className="flex justify-between w-full gap-18 px-12 text-[14px] border-b-2 border-[#E1E5E8] hover:bg-[#fafafa]">
            <td className="flex justify-center items-center flex-col py-4 w-[200px]">
              <img src="/icons/svg-tools/4.svg" alt="4" width={45} />
              <br />
              <p>การแชร์ หน้าจอแชร์ Presentation</p>
            </td>
            <td className="flex flex-col justify-center items-center p-4 w-[200px] gap-5">
              <img
                src="/icons/svg-tools/check.png"
                alt="microsoftstream"
                width={40}
              />
              <p>สามารถทำได้</p>
            </td>
            <td className="flex flex-col justify-center items-center p-4 w-[200px] gap-5">
              <img
                src="/icons/svg-tools/check.png"
                alt="microsoftstream"
                width={40}
              />
              <p>สามารถทำได้</p>
            </td>
            <td className="flex flex-col justify-center items-center p-4 w-[200px] gap-5">
              <img
                src="/icons/svg-tools/check.png"
                alt="microsoftstream"
                width={40}
              />
              <p>สามารถทำได้</p>
            </td>
          </tr>
          <tr className="flex justify-between w-full gap-18 px-12 text-[14px] border-b-2 border-[#E1E5E8] hover:bg-[#fafafa]">
            <td className="flex justify-center items-center flex-col py-4 w-[200px]">
              <img src="/icons/svg-tools/5.svg" alt="5" width={45} />
              <br />
              <p>จำนวนผู้เข้าร่วมที่จำกัด</p>
            </td>
            <td className="flex justify-center items-center p-4 w-[200px]">
              <p>300</p>
            </td>
            <td className="flex justify-center items-center p-4 w-[200px]">
              <p>300</p>
            </td>
            <td className="flex justify-center items-center p-4 w-[200px]">
              <p>250</p>
            </td>
          </tr>
          <tr className="flex justify-between w-full gap-18 px-12 text-[14px] border-b-2 border-[#E1E5E8] hover:bg-[#fafafa]">
            <td className="flex justify-center items-center flex-col py-4 w-[200px]">
              <img src="/icons/svg-tools/6.svg" alt="6" width={45} />
              <br />
              <p>การจำกัดเวลาใช้งาน</p>
            </td>
            <td className="flex justify-center items-center p-4 w-[200px]">
              <p>ไม่จำกัดเวลา</p>
            </td>
            <td className="flex justify-center items-center p-4 w-[200px]">
              <p>ไม่จำกัดเวลา</p>
            </td>
            <td className="flex justify-center items-center p-4 w-[200px]">
              <p>ไม่จำกัดเวลา</p>
            </td>
          </tr>
          <tr className="flex justify-between w-full gap-18 px-12 text-[14px] text-center border-b-2 border-[#E1E5E8] hover:bg-[#fafafa]">
            <td className="flex justify-center items-center flex-col py-4 w-[200px]">
              <img src="/icons/svg-tools/7.svg" alt="7" width={45} />
              <br />
              <p>บัญชีผู้ใช้เพื่อเข้าใช้บริการ</p>
            </td>
            <td className="flex justify-center items-center p-4 w-[200px]">
              <p>ใช้บัญชีอีเมล์ของมหาวิทยาลัยUP Mail</p>
            </td>
            <td className="flex justify-center items-center p-4 w-[200px]">
              <p>สามารถจองใช้ห้องเรียน Zoom ได้ที่งานตารางเรียนตารางสอน</p>
            </td>
            <td className="flex justify-center items-center p-4 w-[200px]">
              <p>ใช้บัญชีอีเมล์ของมหาวิทยาลัยUP Mail</p>
            </td>
          </tr>
          <tr className="flex justify-between w-full gap-18 px-12 text-[14px] text-center">
            <td className="py-6 w-[200px]"></td>
            <td className="flex justify-center items-center p-4 w-[200px] ">
              <p className="bg-[#28A745] py-2 px-4 rounded-md text-white hover:bg-[#218838] cursor-pointer">
                เข้าใช้งาน
              </p>
            </td>
            <td className="flex justify-center items-center p-4 w-[200px]">
              <p className="bg-[#28A745] py-2 px-4 rounded-md text-white hover:bg-[#218838] cursor-pointer">
                ขั้นตอน
              </p>
            </td>
            <td className="flex justify-center items-center p-4 w-[200px]">
              <p className="bg-[#28A745] py-2 px-4 rounded-md text-white hover:bg-[#218838] cursor-pointer">
                เข้าใช้งาน
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="text-[#dc3545] text-center mt-8">
        (ศูนย์บริการเทคโนโลยีสารสนเทศและการสื่อสาร)
      </p>
    </div>
  );
}

export default Table;
