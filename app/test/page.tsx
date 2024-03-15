'use client'
import React from 'react'
import { dataFromClient } from '../backend/post'

function page() {

async function sendData(formData:any){
    dataFromClient(formData)
}


  return (
    <main className='bg-slate-200 w-full h-full'>
        <form className='flex flex-col space-y-4 p-5 items-center' action={sendData}>
            <label className='p-2 text-lg font-bold '  htmlFor="1">Name : </label>
            <input className='w-1/2 p-2 rounded-md text-xl' name='name' id='1' type="text" />

            <label className='p-2 text-lg font-bold ' htmlFor="2">email : </label>
            <input className='w-1/2 p-2 rounded-md text-xl' name='email' id='2' type="email" />

            <input className='bg-green-500 w-1/2 p-2 rounded-md cursor-pointer text-3xl font-bold font-serif' type="submit" />
        </form>
    </main>
  )
}

export default page