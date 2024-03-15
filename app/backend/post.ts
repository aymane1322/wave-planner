"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function dataFromClient(data?: any) {
  let x = await prisma.user.update({
    data:{
      name :"aymaaaaaaaan"
    },
    where :{
      email:"moha123@gmail1.com"
    }
  })
  console.log(x);
}



dataFromClient().then(
    async () => await prisma.$disconnect
).catch(async (e)=> {
    console.log(e)
    await prisma.$disconnect
})
