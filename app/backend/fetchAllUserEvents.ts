'use server'
import { revalidatePath } from "next/cache";
import prisma from "../../prisma/client";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


export async function fetchUserEvents(email?:string) {
  const{getUser} = getKindeServerSession()
  const user = await getUser()
  let id ;
  user?.email ? id = user?.email : id = user?.id

  let allEvents = await prisma.assosiation_utilisateur_evenement.findMany({
    where:{
      isAdmin:true
    },
    include:{
      utilisateur:{
        select:{
          emailU:true,
          nomU:true,
          imgProfileU:true,
        },
        where:{
          emailU:id
        }
      },
      evenement:{
        include:{
          spotsdesurf:{
            select:{
              localisation:true,
            }
          }
        }
      }
    }

  })
  
  console.log("useeeeeeeeeeeeeeeeeeeeer data..:");
  const finalData =allEvents.filter(e=> e.utilisateur !== null  )
  console.dir(finalData,{depth:null});

  revalidatePath("/userEvents")
  return finalData;
}


fetchUserEvents()
.then(async()=>prisma.$disconnect)
.catch(async(e)=>{
    console.log(e);
    console.log(e);
    prisma.$disconnect
})