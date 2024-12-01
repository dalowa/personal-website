import React from 'react'
import { IconGithub, IconInstagram, IconLinkedin, IconTwitter } from './icons'

export default function HomeSocialLinks() {
  return (
    <li className='flex flex-col gap-7 '>
      <ul><IconGithub Link='#' Class='w-6 text-m_red '/></ul>
      <ul><IconInstagram Link='#' Class='w-6 text-m_red '/></ul>
      <ul><IconLinkedin Link='#' Class='w-6 text-m_red ' /></ul>
      <ul><IconTwitter Link='#' Class='w-6 text-m_red ' /> </ul>
    </li>
  )
}
