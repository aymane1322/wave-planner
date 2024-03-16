'use client'
import React, { useEffect, useRef, useState } from 'react'
import { dataFromClient } from '../backend/post'
import { getUsers } from '../backend/post'
import { nanoid } from 'nanoid'




function Page() {
  type user = { idUtilisateur: string; nomU: string; emailU: string; motDePasseU: string; villeU: string; imgProfileU: string; followerU: string; adresseU: string; telU: string; dateNaissanceU: Date; dateInscriptionU: Date; roleU: string; diplomCoach: string; dateAbonnement: Date; datExpirationAbonnement: Date; }[]

const [data , setData] = useState<user|null>(null)
const name = useRef<HTMLInputElement>(null)
  const email = useRef<HTMLInputElement>(null)

async function sendData(formData:any){
    dataFromClient(formData)
    let newData = await getUsers()
    setData(newData)

    
      name.current!.value = '';
      email.current!.value = '';
    
}

useEffect(()=>{
  let promise = getUsers()
promise.then((data)=>{

  setData(data)

})

},[])


  return (
    <main className='bg-slate-200 w-full h-full'>
        <form  className='flex flex-col space-y-4 p-5 items-center' action={sendData}>
            <label className='p-2 text-lg font-bold '  htmlFor="1">Name : </label>
            <input ref={name}  className='w-1/2 p-2 rounded-md text-xl' name='name' id='1' type="text" />

            <label className='p-2 text-lg font-bold ' htmlFor="2">email : </label>
            <input ref={email} className='w-1/2 p-2 rounded-md text-xl' name='email' id='2' type="email" />

            <input className='bg-green-500 w-1/2 p-2 rounded-md cursor-pointer text-3xl font-bold font-serif' type="submit" />
        </form>

        <div className='text-xl font-bold flex flex-col items-center '>
          {data?.map((user)=>(
            <div className='border-b-4 border-black' key={nanoid()}>
            <h1 key={nanoid()}>{user.idUtilisateur}</h1>
            <h1 key={nanoid()}>{user.nomU}</h1>
            <h1 key={nanoid()}>{user.emailU}</h1>
            </div>
          ))}
        </div>
    </main>
  )
}

export default Page