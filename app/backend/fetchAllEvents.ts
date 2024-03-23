import prisma from "../../prisma/client";
export type FetchedDataEvent = ReturnType<typeof fetchAllEvents>;


export async function fetchAllEvents() {
  let allEvents = await prisma.evenement.findMany({
    include: {
      spotsdesurf: {
        select:{
            localisation:true,
        }
      },
      assosiation_utilisateur_evenement:{
        include:{
            utilisateur:{
                select:{
                    nomU:true,
                }
            }
        }
      }
    },
  });
  return allEvents;
}

fetchAllEvents()
  .then(async () => await prisma.$disconnect)
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect;
  });
