'use server'
import prisma from "../../prisma/client";
import { loginSchema } from "../backend/zod";

import bcrypt from "bcryptjs"


export async function dataToServer(formData:FormData){
    let validate = loginSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password")
    })
    if(!validate.success){
        console.log("bad data from server probably the user hacked the client side :3");
        return {error:"bad data from client to the server"}
    }
    const {email , password} = validate.data
 

    let data = await prisma.utilisateur.findFirst({
        where:{
            emailU : email
        },
    })

    if (!data) {
        console.log("User not found");
        return {error:"passwor or email incorrect"};
    }

    const dataBaseEmail = data.emailU
    const dataBasePassword = data.motDePasseU
    
    const isPasswordValid = await bcrypt.compare(password, dataBasePassword);

    if (isPasswordValid) {
        console.log("Password is correct. User authenticated.");
        return {error:"all good"}
        // Redirect the user to the main page or set a session token
    } else {
        console.log("Password is incorrect. Authentication failed.");
        return {error:"passwor or email incorrect"}
    }
    
    
     
}