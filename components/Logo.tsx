import React from 'react'

export default function Logo({clase, clickFunction}: {clase: string, clickFunction: () => void}) {
  return (
    <>
      <svg onClick={clickFunction} className={clase} viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
         <g clipPath="url(#clip0_17_2)">
         <path d="M128.349 94.5C137.972 77.8333 162.028 77.8333 171.651 94.5L236.603 207C246.225 223.667 234.197 244.5 214.952 244.5H85.0481C65.8031 244.5 53.775 223.667 63.3975 207L128.349 94.5Z"/>
         <rect x="12" y="172.904" width="150" height="50" rx="25" transform="rotate(-60 12 172.904)" />
         <rect x="212.301" y="43" width="150" height="50" rx="25" transform="rotate(60 212.301 43)" />
         </g>
         <defs>
         <clipPath id="clip0_17_2">
         <rect width="300" height="300" fill="white"/>
         </clipPath>
         </defs>
      </svg>
    </>
  )
}
