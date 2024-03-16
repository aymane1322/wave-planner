import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { IoEye } from 'react-icons/io5'


function page() {
  
  return (
    <main className='h-4/6 relative bg-gradient-to-r from-blue-500 to-cyan-500 '>
    
    <div className='h-[20%] grid grid-cols-6 place-items-center justify-center '>
    
      <Link href={"/login"}>
      <IoIosArrowBack className='col-start-1 text-myWhite text-3xl' />
      </Link>
      <h1 className='text-myWhite font-myFont text-2xl font-bold text-center col-start-2 col-end-6 '>Wave Planner</h1>
    </div>

    <div className=' bg-myWhite w-full h-[80%] rounded-t-[2.3rem] '>
      <div className='flex justify-center flex-col items-center'>
          <h2 className='text-lg font-bold pt-2 self-start pl-5'>Hello,</h2>
          <h2 className='text-lg font-bold pb-2 self-start pl-5'>Register to get started!</h2>
          <form className='flex items-center flex-col space-y-3 relative' action="">
              <input className='p-2 rounded-md text-sm w-[130%]  focus:bg-slate-200 focus:outline-myBlue' type="text" placeholder='Username' />
              <input className='p-2 rounded-md text-sm w-[130%]  focus:bg-slate-200 focus:outline-myBlue' type="email" placeholder='Email' />
              <input className='p-2 rounded-md text-sm w-[130%] focus:bg-slate-200  focus:outline-myBlue' type="password" placeholder='Password' />
              <input className='p-2 rounded-md text-sm w-[130%] focus:bg-slate-200  focus:outline-myBlue' type="password" placeholder='Confirm Password' />
              <IoEye className='absolute top-[95px] left-[215px] text-gray-400' />
              <IoEye className='absolute top-[143px] left-[215px] text-gray-400' />
              <button type='submit' className='text-myWhite text-sm font-myFont bg-myBlue w-[130%] p-2 rounded-2xl font-bold'>Register</button>
              <p className='text-myBlack text-[9px] font-myFont font-bold pt-3'>Or Register with</p>
              <button className='text-myBlack flex items-center justify-center text-sm font-myFont bg-slate-200 w-[130%] p-2 rounded-2xl font-bold'><Image  src={"/google_ic.svg"} alt='google icon' width={20} height={20}></Image> <span className='ml-1 text-[10px]'>Log In Using Google</span></button>
              <button className='text-myWhite flex items-center justify-center text-sm font-myFont bg-myBlack w-[130%] p-2 rounded-2xl font-bold'><Image  src={"/cib_apple.svg"} alt='google icon' width={20} height={20}></Image> <span className='ml-3 text-[10px]'>Log In Using Apple</span></button>
              <p className=' absolute  text-myBlack text-[12px] font-myFont font-bold   -bottom-10  '>Already have an account? <Link href={"/login"}> <span className='text-myBlue cursor-pointer'>Login Now</span></Link></p>
          </form>
      </div>
     
    </div>

    
    </main>
  )
}

export default page