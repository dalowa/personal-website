'use client'

import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Logo from './Logo'
import Link from 'next/link';

export default function Menu() {
  const pathname = usePathname()
  const paths: string[] = ["home", "about", "projects", "services" ,"contact", "photo gallery", "blog"];
  const pathsUrl: string[] = ["/", "about", "projects", "services" ,"contact", "photo gallery", "blog"];

  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className={`absolute bottom-4 right-4 max-w-[550px] rounded-2xl flex flex-col justify-between items-end ease-linear transition-logo duration-300 ${isOpen?"bg-m_red w-[calc(100%-2rem)] h-[calc(100%-2rem)]":"bg-transparent w-28 h-[calc(100%-2rem)]"}`}>
         <div className={`rounded-2xl py-7 ease-linear transition-logo duration-200 ${isOpen?"w-full h-full ":"h-full "}`}>
            <ul className={`${isOpen?"flex opacity-100":"hidden opacity-0"} transition-opacity duration-300 flex-col gap-4`}>
               {paths.map((path, index) => (
                  <Link href={path} key={index} className={`${pathname == pathsUrl[index]?"border-b-2 border-t-2":""} text-m_white py-1 text-xl text-nowrap text-center font-normal bg-green-40`}>{path.toLocaleUpperCase()}</Link>))}
            </ul>
         </div>
         <div className={`h-24 w-full flex justify-center ${isOpen?"":""}`}>
            <Logo clickFunction={() => setIsOpen(!isOpen)} clase={`cursor-pointer hover:scale-[1.1] ease-linear transition duration-300 ${isOpen?"logo-dalowa-b":"logo-dalowa-a"} w-24 h-24`} />
         </div>
         
      </div>
  )
}
