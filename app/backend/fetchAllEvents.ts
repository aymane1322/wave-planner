import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export async function fetchAllEvents(){

let allEvents  = await prisma.evenement.findMany()
return allEvents
}


fetchAllEvents().then(
    async()=> await prisma.$disconnect
).catch(async (e)=> {
    console.log(e)
    await prisma.$disconnect
})