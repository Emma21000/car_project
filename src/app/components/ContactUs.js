import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ContactUs({ data }) {
  return (
    <div style={{backgroundImage: data.img}} className='flex flex-col items-center w-full lg:h-[1350px] h-full bg-cover bg-center bg-no-repeat px-8 ' id='Contact'>
        <Image src={data.image}
        alt='smallcar'
        width={data.width}
        height={data.height}
        className='object-cover w-80 h-72 my-14' />
        <div className='lg:w-2/5 w-fit h-fit bg-white pt-10'>
            <p className='text-center text-4xl font-thin tracking-widest'>{data.title}</p>
            <p className='w-fit px-10 border-black border-b-2 mx-auto mt-6'></p>
              <div className='grid lg:grid-cols-2 grid-cols-1 px-8 py-8 '>
                <div className='grid grid-cols-1 text-xl font-thin py-4 font-serif'>
                {data.list.map((elem,index)=>(
                    <Link className='py-4 lg:py-0' key={index} href={'#'}>{elem.title}</Link>
                  ))}
                  </div>
                  <div className='grid grid-cols-1 py-2'>
                    {data.form.map((item,idx)=>(
                      <div className='flex flex-col py-4' key={idx}>
                        <span className='text-base font-serif  tracking-widest'>{item.name}</span>
                        <input className=' border-b-2 border-black py-4 outline-none'></input>
                      </div>
                    ))}
                    <button className='mt-6 w-fit px-12 py-4 bg-gray-400 text-center text-white cursor-pointer mx-auto text-xl tracking-widest border-2 border-transparent hover:border-gray-400 hover:bg-white hover:text-gray-400'>Submit</button>
                  </div>
              </div>
        </div>
    </div>
  )
}
