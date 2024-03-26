"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "../../prisma/client";



export async function addUserToDataBase(formData?: FormData) {
  const {getUser} = getKindeServerSession()
  const user = await getUser()
  let code ;
 
  console.log("Useeeeeeeeeeeeeeeer :",user);
  
  if(!user){
    console.log("no user found from the server session");
    return {error:"no user found from the server session"}
  }
   // see if the user is connected using phone number or by email
   user.email ? code = user.email : code = user.id

  let userExist = await prisma.utilisateur.findUnique({
    where:{
      emailU:code
    }
  })

  if(userExist){
    console.log("user already exist in the dataBase");
    return{info:"user already exist in the dataBase"}
  }

  let newUser = await prisma.utilisateur.create({
    data: {
      nomU: user.given_name,
      emailU: code,
      imgProfileU: user?.picture
    },
  });
  console.log(newUser);
  console.log("data added successfuly ...");

  return { error: "all good xD" };
}

addUserToDataBase()
  .then(async () => await prisma.$disconnect)
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect;
  });
