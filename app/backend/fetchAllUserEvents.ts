import prisma from "../../prisma/client";


export async function fetchUserEvents(email?:string) {
    let allUserEvents = prisma.evenement.findMany({
        include: {
          spotsdesurf: {
            select: {
              localisation: true,
            },
          },
          assosiation_utilisateur_evenement: {
            include: {
              utilisateur: {
                select: {
                  nomU: true,
                },
                where:{
                emailU:email
                }
              },
            },
           
          },
        },
        
      });
      console.log(email)
      return allUserEvents;
}


fetchUserEvents()
.then(async()=>prisma.$disconnect)
.catch(async(e)=>{
    console.log(e);
    prisma.$disconnect
})