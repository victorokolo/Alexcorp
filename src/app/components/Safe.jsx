import Image from 'next/image'
import React from 'react'

function Safe() {
  return (
    <div className=' container mx-auto  py-4  '>
        <div className='pb-20  mt-24 mx-auto'>
  
            <h1 className='lg:text-4xl text-2xl font-bold text-center px-6'>Safe & Convienet Transaction</h1>
            <p className='lg:px-72  container  mx-auto  py-4 px-5 pt-5 lg:text-xl text-base font-medium text-[rgba(154,151,151,1)]'>Lorem ipsum dolor sit amet consectetur. Rhoncus adipiscing neque vulputate hac facilisis eleifend. </p>
        </div>
        <div className=' grid grid-cols-1 lg:grid-cols-4 pt-10 justify-center'>       
            <div className='rounded-md  pl-5 px-12'>
            <Image src='images/light.svg'
            className='ml-5 pt-10'
            width={40}
            height={40}
            />

            <h1 className='pt-5 font-bold text-2xl'>Always protected </h1>
            <p className='pt-5 pb-5 font-semibold text-lg text-[rgba(154,151,151,1)]'> Lorem ipsum dolor sit amet consectetur. Sit at eget eu vel.</p>
        </div>        
        <div className='rounded-lg  bg-[rgba(255,204,204,1)] pl-5 px-6 lg:px-0'>
        <Image src='images/bag.svg'
        className='ml-5  rounded-md bg-white  mt-10 '
        width={40}
        height={40}
        />

        <h1 className='pt-5 font-bold text-2xl w-20 pl-5'>Get Reward </h1>
        <p className='pt-5 pb-5 font-semibold text-lg text-black pl-5  mb-10'> Lorem ipsum dolor sit amet consectetur. Sit at eget eu vel.</p>
    </div>        
    <div className='rounded-md  pl-5 px-12 item-center'>
    <Image src='images/Frame 17.svg'
    className='ml-5 pt-10   '
    width={40}
    height={40}
    />

    <h1 className='pt-5 font-bold text-2xl'>No Hidden fees</h1>
    <p className='pt-5 pb-5 font-semibold text-lg text-[rgba(154,151,151,1)]'> Lorem ipsum dolor sit amet consectetur. Sit at eget eu vel.</p>
</div>        
<div className='rounded-md  pl-5 px-12'>
<Image src='images/video.svg'
className='ml-5 pt-10  '
width={40}
height={40}
/>

<h1 className='pt-5 font-bold text-2xl'>Trade on your term </h1>
<p className='pt-5 pb-5 font-semibold text-lg text-[rgba(154,151,151,1)]'> Lorem ipsum dolor sit amet consectetur. Sit at eget eu vel.</p>
</div>        
        </div>
    </div>
  )
}

export default Safe