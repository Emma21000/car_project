import Link from 'next/link'
import React from 'react'

export default function HeroSection({ data }) {
  return (
    <div className='pt-34 w-full h-screen bg-cover bg-center bg-no-repeat' style={{ backgroundImage: data.img }}>
        <div className='flex flex-col items-center text-white'>
            <p className='text-6xl'>{data.icon}</p>
            <span className='text-5xl py-6 font-serif tracking-widest'>{data.title}</span>
            <span className='text-xl font-serif tracking-wide'>{data.subtitle}</span>
        </div>
        <div className='absolute flex lg:bottom-14 bottom-6 gap-6 left-1/2 -translate-x-1/2'>
            {data.icons.map((elem,index)=>(
                <Link key={index} href={elem.path} target="_blank" className='text-white text-5xl'>{elem.icons}</Link>
            ))}
        </div>
    </div>
  )
}
