import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import Link from 'next/link';
import LoginForm from '../components/LoginForm';

function page() {
  return (
   
    
    <main className='h-4/6 relative bg-gradient-to-r from-blue-500 to-cyan-500 w-full sm:hidden'>
    
    <div className='h-[20%] grid grid-cols-6 place-items-center justify-center w-full '>
      {/* <Image className='-z-50 ' src={"/backGround.jpg"} alt='background' fill></Image> */}
      <Link href={"/"}>
      <IoIosArrowBack className='col-start-1 text-myWhite text-3xl' />
      </Link>
      <h1 className='text-myWhite font-myFont text-2xl font-bold text-center col-start-2 col-end-6 '>Wave Planner</h1>
    </div>

    <div className=' bg-myWhite w-full h-[80%] rounded-t-[2.3rem] '>
      <div className='flex justify-center flex-col items-center w-full'>
          <h2 className='text-lg font-bold py-2'>Let’s Surf with friends!</h2>
          <LoginForm>
          </LoginForm>
      </div>
     
    </div>

    
    </main>
  
  )
}

export default page