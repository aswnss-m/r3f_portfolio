import React from 'react'

function Hero() {
    return (
        <div className="w-full flex justify-start h-[100%]">
            <div className=" aspect-square flex justify-end flex-col p-10">
                <h1 className='text-[10vw] md:text-[5vw] font-semibold leading-3'>3D Artist <span className='font-light'>&</span></h1>
                <h1 className='text-[10vw] md:text-[5vw] font-semibold'>Web Developer</h1>
            </div>
        </div>
    )
}

export default Hero
