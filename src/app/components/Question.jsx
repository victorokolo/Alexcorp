import React from 'react'
import Image from 'next/image'

function Question() {
  return (
    <div className='container mt-24 mx-auto lg:px-12 px-6 py-4 pb-40'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div>
        <p className='pb-5 rounded-lg text-[rgba(95,68,236,1)] bg-[rgba(250,250,250,0.62)] w-80 py-3 px-2'>Frequently Asked questions 🙋‍♀️</p>
        <h1 className='lg:text-5xl text-3xl font-black pb-5'>Got Questions? We Got Answers!</h1>
        <p className='text-xl font-normal  text-[rgba(154,151,151,1)] text-left'>Feel free to reach out to us if you have more questions for us. </p>
        <div className='pt-10 pb-10 lg:pb-0 flex flex-row '>
        <buttons className ='px-12 py-4 w-full sm:w-fit rounded-md bg-[rgba(0,0,0,1)] text-white text-center  '> Contact us </buttons>
        
        <Image src='images/Vector.svg'
        width={82}
        height={18}
        />
        </div>
        
        </div>
         <div>
                <div className='flex flex-col-2 border rounded-md px-3 py-3'>
                <div>
                <h1 className='font-medium'>what is alexcorp </h1>
                <p className='font-normal background: text-[rgba(154,151,151,1)] '>Lorem ipsum dolor sit amet consectetur. Diam nunc at elit adipiscing vivamus quisque.</p>
                </div>
                       <div>
                    <Image src ='images/minus.svg'
                    width={30}
                    height={30}
                    />
                    </div>
               
                </div>
                <div className='flex flex-col-2 border rounded-md px-3 py-3 justify-between mt-5'>
                <div>
                <h1 className='font-medium' >What do I need to sign up? </h1>
                </div>
                       <div>
                    <Image src ='images/add.svg'
                    width={24}
                    height={24}
                    />
                    </div>
               
                </div>
                <div className='flex flex-col-2 border rounded-md px-3 py-3 justify-between mt-5'>
                <div>
                <h1 className='font-medium' >How fast is onboarding? </h1>
                </div>
                       <div>
                    <Image src ='images/add.svg'
                    width={24}
                    height={24}
                    />
                    </div>
               
                </div>
                <div className='flex flex-col-2 border rounded-md px-3 py-3 justify-between mt-5'>
                <div >
                <h1 className='font-medium'>How many accounts can i create? </h1>
                
                </div>
                       <div>
                    <Image src ='images/add.svg'
                    width={24}
                    height={24}
                    />
                    </div>
               
                </div>
                <div className='flex flex-col-2 border rounded-md px-3 py-3 justify-between mt-5'>
                <div>
                <h1 className='font-medium'>What tech stack do you support? </h1>
                
                </div>
                       <div>
                    <Image src ='images/add.svg'
                    width={24}
                    height={24}
                    />
                    </div>
               
                </div>
            </div>
            </div>
        </div>
  )
}

export default Question