import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='pt-10 text-white bg-[rgba(211,30,21,1)] lg:px-64 px-3  py-4 pb-40'>
        <div className='text-center pb-20'> 
            <h1>Subscribe To Our Newsletter</h1>        
        </div>
        <div className="items-center px-4 flex flex-row justify-center" >
            <div className="relative">
                <div className="absolute top-3 left-3 items-center">
                </div>
                <input
                    type="text"
                    className="block p-2 pl-10 lg:w-80 w-60 text-gray-900 bg-gray-50 rounded-xl border border-gray-300 focus:pl-3"
                    placeholder="Enter email."
                />
                  </div>
                  <div>
                  <buttons className =' px-5 py-3 w-full sm:w-fit rounded-xl mr-4 bg-[rgba(0,0,0,1)] text-white '>  Subscribe </buttons>
                  </div>
</div>
        <div className=''>
        <div className='pt-10'>
        </div>
            <div className='grid grid-cols-1 lg:grid-cols-4'>
                <div className='flex flex-row lg:flex-col gap-x-3 justify-center'>
                 <h1 className='pb-3'>Home</h1>
                 <h1 className='pb-3'>About</h1>
                 <h1>Service</h1>
                </div>
                <div className='pt-5 lg:pt-0 flex flex-row lg:flex-col gap-x-3 justify-center'>
                <h1 className='pb-3'>Privacy policy</h1>
                <h1 className='pb-3'>Legal</h1>
                <h1>Terms of service</h1>
               </div>
               <div className='flex justify-center'>
               <h1>Help center</h1>
               </div>
               <div className='pt-5 lg:pt-0'>
               <h1 className='text-center pb-3'>social media</h1>              
         <div className='flex flex-row justify-center  gap-x-3'>
         <Image src='images/Frame 58.svg'
         width={40}
         height={40}/>
         <Image src='images/Frame 59.svg'
         width={40}
         height={40}/>
         <Image src='images/Frame 60.svg'
         width={40}
         height={40}/>
       </div>  
       </div>
            
     
              </div>
        </div>

        <div className='pt-40'>
            <h1 className='text-center'> © Alex 2023. All rights reserved.</h1>
        </div>
    </div>
  )
}

export default Footer