import React from 'react'

interface detailCard {
  details: {
    title: string;
    detail: string;
  }[];
}

const cardContent:React.FC<detailCard> = ({details}) => {
  return (
    <>
    {details.map((detail,index:number) =>(
      <div className='mx-4 md:mx-0' key={index}>
        <div className='group hover:bg-gradient-to-r hover:from-[#f4dbfb] hover:to-[#ffd6d6] p-[1rem] xl:w-[23.5rem] lg:w-[20rem] md:w-[18rem] w-[18rem] bg-gradient-to-r from-[#a24ba6] to-[#b547a3] text-white rounded-[1.5rem] text-center cursor-pointer '>
                <p className='lg:text-[1.4rem] md:text-[1.2rem] mb:text-[1.5rem] group-hover:text-[#673AB7]'>{detail.title}</p>
                <p className='text-[0.8rem] mb:text-[1rem] group-hover:text-[#673AB7]'>{detail.detail}</p>
        </div>
      </div>
    ))}
    </>
  )
}

export default cardContent