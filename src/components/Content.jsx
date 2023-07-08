import React from 'react'

function Content() {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          ABOUT ME
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          APIWAT KASAHMA
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 text-gray-500'>
            Software Engineer
          </p>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-green-500'>Get Started</button>
      </div>
    </div>
  )
}

export default Content