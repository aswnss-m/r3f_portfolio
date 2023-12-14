import React from 'react'

function Hero() {
    return (
        <div className={` w-full h-full p-10 grid 
                            grid-cols-1 grid-rows-1
                            md:grid-cols-2 md:grid-rows-2`}>

            <div className="md:row-start-2 flex flex-col justify-end">
                <h1 className='text-[10vw] md:text-[5vw] font-semibold'>3D Artist <span className='font-light'>&</span></h1>
                <h1 className='text-[10vw] md:text-[5vw] font-semibold'>Web Developer</h1>
            </div>
            <div className={`flex md:justify-end items-end row-start-2 md:col-start-2`}>
            <button className={`font-medium underline underline-offset-2 tracking-widest`}>Get in touch</button>
            </div>
        </div>
    )
}

export default Hero
