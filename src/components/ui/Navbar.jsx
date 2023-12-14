import React from 'react'
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <div className='flex justify-between px-10 py-5 items-end z-[100] absolute w-full top-0'>
      <h1 className='font-bold text-xl'>Aswnss</h1>
      <ul className='flex gap-2'>
        <li className=' hover:underline'><Link to={'/'}>About</Link></li>
        <li className=' hover:underline'><Link to={'/'}>Projects</Link></li>
        <li className=' hover:underline'><Link to={'/'}>Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
