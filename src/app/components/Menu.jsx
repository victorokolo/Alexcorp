"use client"

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


export default function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <Head>
        <title>Create Next Responsive Navbar With Tailwind CSS</title>
        <meta
          name="description"
          content="Create Next JS Responsive Menu with Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="w-full fixed  bg-white ">
        <div className="  px-3 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className=''>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="#">
              <Image src='/images/Group.svg' 
              width={40}
              height={40}
              quidate
              />
                </Link>
              <div className="md:hidden">
              
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="black"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="black"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className=" lg:pl-96 items-center justify-center font-medium md:text-sm lg:font-medium mx-auto space-y-8 md:flex md:space-x-6 md:space-y-0">
                
                <li className="text-black  text-base font-bold">
                  <Link href="/blogs">
                    Home
                  </Link>
                </li>
                <li className="text-black    font-medium">
                  <Link href="/about">
                    About
                  </Link>
                </li>
                <li className="text-black    font-medium">
                  <Link href="/contact">
                    Service
                  </Link>
                </li>
                <li className="text-black    font-medium">
                <Link href="/contact">
                   Support
                </Link>
              </li>
            <div className='flex pl-0 md:pl-20 lg:pl-80'>
          <div className=' ' >
          <button className ='px-6 py-3 rounded-lg bg-black text-white font-medium'>Get started</button>
          </div>
            </div>
           
      </ul>
    
              
            </div>
            
          </div>
          <div className=''>
  
     </div>
        </div>
        
      </nav>
              
    </div>
  );
}