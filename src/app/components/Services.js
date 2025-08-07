import React from 'react'

export default function Services({ data }) {
  return (
    <div className='w-full h-full bg-cover bg-center bg-no-repeat' style = {{ backgroundImage: data.img}}>
      <p className='text-4xl text-white font-serif tracking-widest text-center pt-12'>{data.title}</p>
      <p className='border-b-2 border-white mx-auto w-32 py-4'></p>
      <div className='flex lg:flex-row flex-col items-center justify-center py-14 gap-16 text-center'>
        {data.icons.map((elem,index)=>(
          <div className='flex flex-col items-center text-white gap-y-4' key={index}>
            <p className='text-6xl'>{elem.icon}</p>
            <span>{elem.title}</span>
            <span className='text-base max-w-44'>{elem.description}</span>
          </div>
        ))}
      </div>
    </div>  
  )
}
