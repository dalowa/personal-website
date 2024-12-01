'use client'

import React, { useState } from 'react'
import Logo from './Logo'

export default function Menu() {

  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className={`absolute bottom-4 right-4 rounded-2xl flex flex-col justify-between items-end ease-linear transition-logo duration-300 ${isOpen?"bg-m_red w-[calc(100%-2rem)] h-[calc(100%-2rem)]":"bg-transparent w-28 h-[calc(100%-2rem)]"}`}>
         <div className={`rounded-2xl ease-linear transition-logo duration-300 ${isOpen?"w-full h-full ":"h-full "}`}>

         </div>
         <div className={`h-24 w-full flex justify-center ${isOpen?"":""}`}>
            <Logo clickFunction={() => setIsOpen(!isOpen)} clase={`ease-linear transition duration-300 ${isOpen?"logo-dalowa-b":"logo-dalowa-a"} w-24 h-24`} />
         </div>
         
      </div>
  )
}
