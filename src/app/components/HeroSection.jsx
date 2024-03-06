import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return    (
            <section className='border-b-4 px-12 border-[rgba(211,30,21,1)] mb-10'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 '>
                        <div className='  py-4 '>
                            <h1 className='text-black mb-4 lg:text-6xl text-4xl  font-bold'> Sending <span className='text-[rgba(211,30,21,1)] italic'> abroad  </span>money made easy </h1>
                            <p className='text-[rgba(94,94,94,1)] font-normal text-base sm:text-xl lg:text-xl mb-6'> Lorem ipsum dolor sit amet consectetur. Scelerisque urna ac scelerisque sit sed lectus. Augue vestibulum donec malesuada aenean natoque 
                            lacinia convallis. Ipsum pharetra vel pulvinar vitae. Proin dis sem sit morbi lorem aliquam ac.</p>

                            <p className='pt-10 text-[rgba(94,94,94,1)] font-normal text-base sm:text-xl lg:text-xl'>Natoque lacinia convallis. Ipsum pharetra vel pulvinar vitae. Proin dis sem sit morbi lorem aliquam ac.</p>
                            <div className='pt-10 '>
                            <buttons className =' px-6 py-4 w-full sm:w-fit rounded-md mr-4 bg-[rgba(211,30,21,1)] '> Start sending </buttons>
                           
                            </div>
                            </div>
                            <div className=' pt-20 place-self-center '>
                            <div className=' rounded-full bg-[rgba(255,204,204,1)] w-[351px] h-[400px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image src='/images/Mask group.svg'
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:w-[530px] lg:h-[720px]'
                            alt='hero'
                            width={430}
                            height={530}

                            />
                  
                        </div>
                        </div>
                       
                    </div> 
                    <div className='flex   mx-auto justify-center items-center '>
                    <Image src ='images/slide.svg'
                    className='mt-40 md:mt-40 lg:mt-40 pb-5'
                    alt='slide'
                    width={140}
                    height={20}

                    />
                </div>
            </section>
        )
        }

export default HeroSection
