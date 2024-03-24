'use server'
import prisma from "../../prisma/client";


export async function fetchUserEvents(email?:string) {
  let allUserEvents
    if(email){
      console.log("i'm innnnnnnnnnnnnnn");
      console.log("and the email is ",email);
      
      
      allUserEvents =await prisma.utilisateur.findUnique({
        where:{
          emailU:email
        },
        include:{
          assosiation_utilisateur_evenement:{
            include:{
              evenement:{
                include:{
                  spotsdesurf:true
                }
              }
            }
          }
        },
      })
    }
      console.log(email)
      console.log("daaaaaaaaaaaaaaaataaaaaaaaaaaaaaaaaaaaaaaaaa");
      
      console.log(allUserEvents)
      return allUserEvents;
}


fetchUserEvents()
.then(async()=>prisma.$disconnect)
.catch(async(e)=>{
    console.log(e);
    prisma.$disconnect
})