import React from 'react'
import Image from 'next/image'
import { IoIosArrowBack } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

function page() {
  return (
   
    
    <main className='h-4/6 relative bg-gradient-to-r from-blue-500 to-cyan-500 '>
    
    <div className='h-[25%] grid grid-cols-6 place-items-center justify-center '>
      {/* <Image className='-z-50 ' src={"/backGround.jpg"} alt='background' fill></Image> */}
      <IoIosArrowBack className='col-start-1 text-myWhite text-3xl' />
      <h1 className='text-myWhite font-myFont text-2xl font-bold text-center col-start-2 col-end-6 '>Wave Planner</h1>
    </div>

    <div className=' bg-myWhite w-full h-[75%] rounded-t-[2.3rem] '>
      <div className='flex justify-center flex-col items-center'>
          <h2 className='text-lg font-bold py-2'>Let’s Surf with friends!</h2>
          <form className='flex items-center flex-col space-y-3 relative' action="">
              <input className='p-2 rounded-md text-sm w-64  focus:bg-slate-200 focus:outline-myBlue' type="text" placeholder='Enter your email' />
              <input className='p-2 rounded-md text-sm w-64 focus:bg-slate-200  focus:outline-myBlue' type="password" placeholder='Enter your password' />
              <IoEye className='absolute top-[45px] left-[225px] text-gray-400' />
              <p className='text-[9px] font-bold text-right w-full'>Forgot Password?</p>
              <button type='submit' className='text-myWhite text-sm font-myFont bg-myBlue w-64 p-2 rounded-2xl font-bold'>Login</button>
              <p className='text-myBlack text-[9px] font-myFont font-bold pt-3'>Or login with</p>
              <button className='text-myBlack flex items-center justify-center text-sm font-myFont bg-white w-64 p-2 rounded-2xl font-bold'><Image  src={"/google_ic.svg"} alt='google icon' width={20} height={20}></Image> <span className='ml-1 text-[10px]'>Log In Using Google</span></button>
              <button className='text-myWhite flex items-center justify-center text-sm font-myFont bg-myBlack w-64 p-2 rounded-2xl font-bold'><Image  src={"/cib_apple.svg"} alt='google icon' width={20} height={20}></Image> <span className='ml-3 text-[10px]'>Log In Using Apple</span></button>
              <p className=' absolute  text-myBlack text-[12px] font-myFont font-bold   -bottom-20  '>Don’t have an account? <span className='text-myBlue cursor-pointer'>Register Now</span></p>
          </form>
      </div>
     
    </div>

    
    </main>
  
  )
}

export default page