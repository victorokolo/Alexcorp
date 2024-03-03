import React from 'react'
import Image from 'next/image'

function Works() {
  return (
    <div className=' text-[rgba(0, 0, 0, 1)] mt-24  place-self-center py-4 pb-40'>
        <div className='text-center pb-10'>
        <h1 className='text-lg font-medium'>-PROCESS</h1>
        <h1 className='pt-5 text-4xl font-bold'> How it works</h1>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 '>
        <div className='text-center'>
        <button  className='rounded-full bg-black text-white  px-6 py-3 ml-5 lg:ml-0 '  >1 </button>
        <h1 className='pt-5 pb-3 text-2xl font-semibold'>Register</h1>
           <p className='text-center px-12 text-sm font-normal'>Download Alex  from the
           apple app store or google play
           store</p>
        </div>
        <div className='pt-5 lg:pt-0 text-center'>
        <button  className='rounded-full bg-black text-white  px-6 py-3 ml-5 lg:ml-0 '  >2 </button>
        <h1  className='pt-5 pb-3 text-2xl font-semibold'>Verify</h1>
           <p className='text-center px-12 text-sm font-normal'>Complete the sign up
           process, confirm your phone
           number</p>
        </div>
        <div className='text-center pt-5 lg:pt-0'>
        <button  className='rounded-full bg-black text-white  px-6 py-3 ml-5 lg:ml-0 '  >3 </button>
        <h1 className='pt-5 pb-3 text-2xl font-semibold'>Explore</h1>
           <p className='text-center px-12 text-sm font-normal' >Get your wallet account and enjoy your 
           fast transaction all in one 
           app</p>
        </div>
      
        </div>

        
    </div>
  )
}

export default Works