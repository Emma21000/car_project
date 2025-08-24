import React from 'react'

export default function OurWork({ data }) {
  return (
    <div className='w-full text-center my-16'>
        <p className='text-4xl font-thin tracking-widest'>{data.title}</p>
        <p className='mx-auto border-b-2 py-2 px-14 w-fit border-black'></p>
        <p className='text-xl pt-6 font-light'>{data.subtitle}</p>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-8'>
          {data.list.map((elem,index)=>(
              <div key={index} className='rounded-lg mx-auto w-11/12 h-[340px] bg-no-repeat bg-cover bg-center my-6 cursor-pointer shadow-2xl shadow-black' style={{backgroundImage: elem.img}}>
                <div className='rounded-lg w-full h-full hover:bg-black/50 opacity-0 hover:opacity-80 flex flex-col justify-center text-white'>
                  <span className='text-2xl font-serif pb-4'>{elem.name}</span>
                  <span className='w-80 mx-auto text-xl font-serif pb-10'>{elem.description}</span>
                  <div className='flex items-center justify-between  px-12 text-3xl'>
                    <span>{elem.icon}</span>
                    <span>{elem.shareicon}</span>
                  </div>
                </div>
              </div>
          ))}
        </div>
    </div>
  )
}
