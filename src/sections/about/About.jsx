import React from 'react'

function About() {
  return (
    <div className="w-full flex items-center justify-end text-zircon-100 h-screen">
        <div className='w-[50%] pr-10'>
      <h1 className='text-[5vw] font-bold text-zircon-300'>About</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti dignissimos, repellat neque laboriosam sunt et voluptas quam dolorum aliquam ullam reiciendis id temporibus, necessitatibus error nulla illum cupiditate. Deleniti, sunt.
      </p>
      <div className="skills">
        <h1 className='font-bold'>Skills</h1>
        <div className="flex gap-2 flex-wrap">
        <span className="skill bg-zircon-600 hover:bg-zircon-700 cursor-pointer px-2 py-1 rounded-md">NextJs</span>
        <span className="skill bg-zircon-600 hover:bg-zircon-700 cursor-pointer px-2 py-1 rounded-md">React</span>
        <span className="skill bg-zircon-600 hover:bg-zircon-700 cursor-pointer px-2 py-1 rounded-md">Blender</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
