import React from 'react'
import ProfilePic from './assets/Dad.png'

const Aboutme = () => {
  return (
    <div className='w-full bg-white py-16 px-4' id="aboutme">
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={ProfilePic} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#FFB612] font-bold'>A little bit about me</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>John Miller</h1>
                <p>Insert info here....</p>
                <button className='bg-black text-[#FFB612] w-[200px] rounded-lg font-medium my-6 mx-auto md:mx-0 py-3'>More info</button>
            </div>
        </div>
    </div>
  )
}

export default Aboutme
