import React from 'react'

export default function Aboutus({ data }) {
  return (
    <div style={{backgroundImage: data.img }} className='lg:h-[550px] w-full bg-cover bg-center bg-no-repeat px-8 py-8' id='About Us'>
      <div className='w-full h-full flex items-center justify-center '>
        <div className='lg:w-1/2 lg:h-2/3  bg-white flex flex-col items-center justify-center'>
          <span className='text-4xl tracking-widest pt-8'>{data.title}</span>
          <span className='lg:p-8 p-6 font-thin text-base tracking-widest leading-7 max-h-[395px] overflow-hidden'>{data.description}</span>
        </div>
      </div>
    </div>
  )
}
