"use client";
import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar({ data }) {
  const [toggle,setToggle] = useState(false);
  function cangeDir(){
    setToggle( !toggle );
  }

  return (
    <div className='top-0 left-0 fixed  w-full'>
      <div className='relative flex items-center lg:justify-around justify-between py-5 font-head font-thin bg-menubg text-white'>
          <h1 className='text-5xl px-8 lg:px-0'>{data.logo}</h1>
          <div className='hidden lg:flex items-center justify-center gap-8'>
              {data.menu.map((elem,index)=>(
                  <Link className='cursor-pointer text-base bg-[#63768D] py-2 px-6 tracking-wide hover:bg-[#FDFFFC] hover:text-menubg' key={index} href={elem.path} >{elem.title}</Link>
              ))}
          </div>
          <div className='hidden lg:flex items-center justify-end gap-4'>
              <p className='text-5xl'>{data.icon}</p>
              <p className='text-4xl'>{data.sing}</p>
          </div>
          <div className='lg:hidden lg:px-0 px-8'>
            <Link href={'#'} onClick={cangeDir} className='text-5xl'>{toggle ? data.close : data.open}</Link >
          </div>
      </div>
      {toggle && (
        <div className='lg:hidden absolute flex flex-col items-center w-full left-0 bg-menubg gap-6 py-8'> 
          {data.menu.map((elem,index)=>(
            <Link className='rounded-xl text-xl bg-[#63768D] py-4 px-4 tracking-wide w-[90%] text-center text-white hover:bg-[#FDFFFC] hover:text-menubg' key={index} href={elem.path} onClick={() => setToggle(false)} >{elem.title}</Link>
          ))}
          <div className='flex items-center justify-center gap-4 text-white'>
              <p className='text-5xl'>{data.icon}</p>
              <p className='text-4xl'>{data.sing}</p>
          </div>
        </div>
      )}
    </div>
  )
}
