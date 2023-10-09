import React from 'react'

const Notifyme = () => {
  return (
    <div className='w-full py-16 text-white px-4' id='notifyme'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want to get into contact with me?</h1>
            <p>Give me your email</p>
            <p>Additionally you can contact me at insert email here.</p>
            </div>
            <div className='my-4'> 
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black bg-white' type="email" placeholder='Enter Email' />
                    <button className='bg-[#FFB612] w-[200px] rounded-lg font-medium ml-4 my-6 mx-auto py-3 text-black'> Notify Me </button>
                </div>
            <p>We care about your data. Read our <span className='text-[#FFB612]'>Privacy Policy.</span> </p>
            </div>
        </div>
        </div>
  )
}

export default Notifyme
