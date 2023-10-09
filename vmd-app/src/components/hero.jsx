import React from 'react'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#FFB612] p-2 font-bold'>VERSA MOLD AND DESIGN LLC</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Insert useful info</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Motto</p>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'>Here we go steelers</p>
            </div>
            <p className='md:text-xl text-l font-bold pt-4 text-gray-500'>Mr. John Miller Designs stuff and molds</p>
            <button className='bg-[#FFB612] w-[200px] rounded-lg font-medium my-6 mx-auto py-3 text-black'>More info</button>
        </div>
    </div>
  )
}

export default Hero
