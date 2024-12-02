import React from 'react'
import { IconGithub, IconInstagram, IconLinkedin, IconTwitter } from './icons'

export default function HomeSocialLinks() {
  return (
    <li className='flex flex-col gap-7 '>
      <ul><IconGithub Link='#' Class='w-[1.35rem] hover:text-m_white text-m_red hover:-translate-y-1 transition-transform duration-300'/></ul>
      <ul><IconInstagram Link='#' Class='w-[1.35rem] hover:text-m_white text-m_red hover:-translate-y-1 transition-transform duration-300'/></ul>
      <ul><IconLinkedin Link='#' Class='w-[1.35rem] hover:text-m_white text-m_red hover:-translate-y-1 transition-transform duration-300' /></ul>
      <ul><IconTwitter Link='#' Class='w-[1.35rem] hover:text-m_white text-m_red hover:-translate-y-1 transition-transform duration-300' /> </ul>
    </li>
  )
}
