"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function dataFromClient(data?: any ) {
  let x = await prisma.utilisateur.create({
    data:{
      nomU :data.get("name"),
      emailU:data.get("email"),
    },
    
  })
  
  console.log(x);
  console.log("data added succesfuly ...")
}

export async function getUsers(){
  let data = await prisma.utilisateur.findMany()
  return data
}


dataFromClient().then(
    async () => await prisma.$disconnect
).catch(async (e)=> {
    console.log(e)
    await prisma.$disconnect
})


