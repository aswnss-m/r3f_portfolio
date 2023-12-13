import React from 'react'

function Hero() {
    return (
        <div className="w-full flex items-center justify-center">
            <div className='flex items-center justify-center flex-col h-screen'>
                <p className='justify-self-start w-full font-cursive text-[2rem]'>I'm Aswin</p>
                <h1 className='text-[15vw] text-zircon-300 font-bold leading-[80%]'>3D ARTIST<span className='font-thin text-[10vw] text-zircon-600'>&</span></h1>
                <h1 className='text-[15vw] text-zircon-300 font-bold leading-[80%]'>WEB DEV</h1>
                {/* <h1 className='text-[12vw] text-zircon-500 font-bold'>Web Dev</h1> */}
            </div>
        </div>
    )
}

export default Hero
