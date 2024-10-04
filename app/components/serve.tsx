import React from "react";

function Serve() {
  return (
    <div className="md:mt-48 md:pb-20 mt-20 pb-12 mx-5">
      <section>
        <div className="flex justify-center items-center flex-col gap-2">
          <h1 className="text-[#6849a8] text-[28px] font-[400]">
            บริการของเรา
          </h1>
          <div className="relative">
            <div className="absolute left-[-80px] top-[-5px] w-[80px] h-[3px] bg-[#F97794] rounded-full"></div>
          </div>
          <p className="text-[#666666] text-[19.6px]">
            พร้อมให้บริการ ทำงานเป็นทีม ยิ้มแย้มแจ่มใส ใส่ใจคุณภาพ
          </p>
        </div>
      </section>
      <section className="relative grid xl:grid-cols-3 md:grid-cols-2 place-items-start lg:gap-4 md:gap-6 mt-14 font-[sans-serif] lg:mx-20 md:mx-10">
        {/* 1 */}
        <div className="flex flex-col gap-12">
          <div>
            <div className="flex lg:w-[380px] gap-4">
              <img
                src="/icons/service-icons/service-register.svg"
                alt="service-register"
                height={60}
                width={60}
              />
              <div className="flex flex-col flex-1">
                <h2 className="text-[16.8px]">ระบบทะเบียนออนไลน์</h2>
                <p className="text-[14px] text-[#666666]">
                  สะดวกในลงทะเบียนเรียน,เพิ่ม-ถอนรายวิชา พร้อมตรวจสอบรายวิชาได้
                  ง่ายและรวดเร็ว
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex lg:w-[380px] gap-4">
              <img
                src="/icons/service-icons/service-evaluate.svg"
                alt="service-evaluate"
                height={60}
                width={60}
              />
              <div className="flex flex-col flex-1">
                <h2 className="text-[16.8px]">ประเมินการเรียนการสอนออนไลน์</h2>
                <p className="text-[14px] text-[#666666]">
                  ประเมินการเรียนการสอนในรายวิชาที่เปิดสอน
                  พร้อมทั้งประเมินผู้สอนในรายวิชา ได้อย่างสะดวกและรวดเร็ว
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex lg:w-[380px] gap-4">
              <img
                src="/icons/service-icons/service-room.svg"
                alt="service-room"
                height={60}
                width={60}
              />
              <div className="flex flex-col flex-1">
                <h2 className="text-[16.8px]">จองใช้ห้องเรียน</h2>
                <p className="text-[14px] text-[#666666]">
                  ตรวจสอบห้องว่าง
                  และยื่นคำร้องขอจองผ่านระบบพร้อมตรวจสอบขั้นตอนการจองได้อย่างรวดเร็ว(อยู่ระหว่างดำเนินการ)
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="flex flex-col gap-12 md:mt-0 mt-10">
          <div>
            <div className="flex lg:w-[380px] gap-4">
              <img
                src="/icons/service-icons/service-request.svg"
                alt="service-request"
                height={60}
                width={60}
              />
              <div className="flex flex-col flex-1">
                <h2 className="text-[16.8px]">คำร้องออนไลน์</h2>
                <p className="text-[14px] text-[#666666]">
                  สะดวกในการยื่นเอกสารคำร้อง และสามารถตรวจสอบได้อย่างรวดเร็ว
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex lg:w-[380px] gap-4">
              <img
                src="/icons/service-icons/service-grade.svg"
                alt="service-grade"
                height={60}
                width={60}
              />
              <div className="flex flex-col flex-1">
                <h2 className="text-[16.8px]">ประมวลผลการเรียน</h2>
                <p className="text-[14px] text-[#666666]">
                  ตรวจสอบผลการเรียนพร้อมสามารถทดลองคำนวณผลการเรียนในภาคการศึกษาถัดไปได้
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[1.2rem]">
            <div className="flex lg:w-[380px] gap-4">
              <img
                src="/icons/service-icons/service-report.svg"
                alt="service-rereportgister"
                height={60}
                width={60}
              />
              <div className="flex flex-col flex-1">
                <h2 className="text-[16.8px]">ข้อมูลสารสนเทศ</h2>
                <p className="text-[14px] text-[#666666]">
                  ข้อมูลสถิติการศึกษาของมหาวิทยาลัยพะเยา
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="xl:w-96 xl:h-20 xl:block mb:hidden"></div>
          <div>
            <div className="lg:absolute lg:right-12 lg:z-[-10] lg:bottom-[-80px] xl:block mb:hidden">
              <img
                src="/image/image-servs/service-student.png"
                alt="service-student"
                width={420}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Serve;
