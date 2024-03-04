import Image from 'next/image'
import React from 'react'

function Intro() {
  return (
  <div className=''>
    <div className=' bg-[rgba(17,16,17,1)] pt-40 grid grid-cols-1 lg:grid-cols-2 lg:pl-20  '>
    <div className=''>
    <h1 className='font-black lg:text-5xl text-3xl text-[rgba(255,255,255,1)] pb-5'> The future of <span className='text-[rgba(211,30,21,1)]'>Money</span>  exchange</h1>
    <p className='font-normal text-xl pb-40 text-[rgba(255,255,255,1)]'> Lorem ipsum dolor sit amet consectetur.</p>
    <Image src='images/Frame 110.svg'
    className=' pb-10'
    width={200}
    height={57}
    />
</div>
<div>
<Image src='/images/hand.svg'

width={506}
height={400}
/>
</div>
    </div>
        
    </div>
  )
}

export default Intro