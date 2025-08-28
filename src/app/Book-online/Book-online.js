import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Bookonline({ data }) {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center my-16 '>
        <div className='flex items-center gap-8 justify-start w-11/12 lg:my-0 my-8 lg:px-0 px-6'>
          <Link className='text-4xl cursor-pointer' href={'/'}>{data.arrowleft}</Link>
          <p className='text-2xl tracking-widest font-thin whitespace-nowrap'>{data.name}</p>
        </div>
        <p className='text-4xl font-serif tracking-widest'>{data.title}</p>
        <p className='px-16 border-b-2 border-black mt-4'></p>
        <div className='w-fit h-full flex lg:flex-row flex-col items-center justify-center my-14 border-2 border-black '>
          <Image src={data.img}
          alt='car'
          width={600}
          height={600} className='object-cover ' />
          <div className='flex flex-col px-16 tracking-widest'>
            {data.list.map((elem,index)=>(
              <Link className='my-6 text-2xl' href={'#'} key={index}>{elem.name}</Link>
            ))}
            <button className='my-6 px-8 bg-gray-400 text-white py-4 cursor-pointer border-2 border-transparent hover:bg-white hover:text-gray-400 hover:border-gray-400 transition-all duration-150'>BOOK NOW</button>
          </div>
        </div>
    </div>
  )
}
