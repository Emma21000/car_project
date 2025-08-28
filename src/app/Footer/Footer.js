import Link from 'next/link'
import React from 'react'

export default function Footer({ data }) {
  return (
    <div className='w-full h-48 bg-stone-400 flex flex-col items-center justify-center text-white'>
        <div  className='w-full flex items-center justify-center gap-8  text-4xl '>
            {data.icons.map((elem,index)=>(
                <Link target='_blank' key={index} href={elem.path}>{elem.icons}</Link>
            ))}
        </div>
        <p className='pt-8 tracking-widest font-serif'>{data.title} <Link href={'https://www.wix.com/?utm_campaign=vir_created_with'} className='underline underline-offset-6 font-serif ' target='_blank'>Wix</Link></p>
    </div>
  )
}
