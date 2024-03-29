import React from 'react'
import Image from 'next/image'



function AboutSection  () {

  
  return (
    <div className='text-black mx-0 lg:mx-24 flex justify-center'>
    <div className=' px-12 rounded-3xl bg-[rgba(253,237,237,1)] '>
    <div className=' text-center pt-10 pb-10 lg:px-56 px-0  '>
        <h1 className='lg:text-5xl text-xl font-bold text-black mb-4 '>Get quick conversion <span className='text-[rgba(211,30,21,1)] italic '> rates  </span> and send your money now</h1>
       </div>
       <div className='rounded-3xl bg-white py-10 lg:py-24 px-3 '>
       <div className=' flex flex-col lg:flex-row pt-5 ml-5 mr-10 lg:ml-20 lg:mr-20 '>
       <Image src='images/oxo.svg'
       className='ml-5 lg:ml-0'
       width={300}
       height={90}
       />
       <Image src='images/nav.svg'
       className='mx-auto pt-5 lg:pt-0'
       width={40}
       height={40}
       />
       <Image src='images/preex.svg'
       className='pt-5 ml-5 lg:ml-0 lg:pt-0'
       width={300}
       height={90}
       />
     </div>
       </div>
       <div className='flex justify-end pr-5 lg:pr-5  '>
       <Image src='images/Frame 110.svg'
       className=' pb-10 pt-20  '
       width={350}
       height={57}
       />
     </div>
      
    </div>
      

   
    </div>
  )
}

export default AboutSection
