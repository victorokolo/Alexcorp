import Image from 'next/image'
import React from 'react'

function Transport() {
  return (
    <div className='   container mt-24 mx-auto w-auto px-12 py-4 py-4 pb-40'>
      <div className='text-center pb-20'>
      <div>
      <buttons className ='px-3 py-2 rounded-md mr-4 bg-[rgba(233,229,248,1)] '>  Many more things ✨ </buttons>
      </div>
     
      <h1 className='pt-10 lg:text-4xl text-xl font-black'>Just enought to get you going<br/> everyday</h1>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-5 text-left'>
        <div className=''>
          <Image src ='/images/section.svg'
          className='w-[500px]'
          height={271}
          width={386}
          />
          <div className='rounded-2xl bg-[rgba(53,33,156,1)] py-14 px-3 mt-5 pt-5 pb-5 text-white '>
            <h1 className='text-left font-semibold text-3xl pb-5 '>Personal Transfer</h1>
            <p className='font-normal text-base'>Lorem phasellus risus dictum eu nunc dignissim viverra sodales amet.</p>
          </div>
        </div>
        <div className=' pb-10 pt-5 lg:pt-0 '>
        <div className='rounded-2xl bg-[rgba(229,138,19,1)] py-6 px-3   pb-5 text-white mb-5 '>
        <h1 className='text-left font-semibold text-3xl mb-5'> Business Transfer</h1>
        <p className='font-normal text-base'>Lorem phasellus risus dictum eu nunc dignissim viverra sodales amet.</p>
      </div>
        <Image src ='/images/section (1).svg'
        className='w-[500px]'
        height={271}
        width={386}
        />
 
      </div>
      <div className='pt-5 lg:pt-0 w-auto'>
      <Image src ='/images/section (2).svg'
      className='w-[500px]'
      height={271}
      width={386}
      />
      <div className='rounded-2xl bg-[rgba(238,38,53,1)] py-14 px-3 mt-5 pt-5 pb-5 text-white '>
            <h1 className='text-left font-semibold text-3xl pb-5'>Personal Transfer</h1>
            <p className='font-normal text-base'>Lorem phasellus risus dictum eu nunc dignissim viverra sodales amet.</p>
          </div>
    </div>
      </div>
      <div className='pt-20 flex justify-center '>
      <buttons className ='px-6 py-4 w-full sm:w-fit rounded-md mr-4 bg-[rgba(0,0,0,1)] text-white text-center '> Start sending </buttons>
      </div>
    </div>
  )
}

export default Transport