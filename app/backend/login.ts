'use server'
import { loginSchema } from "../backend/zod";

export async function dataToServer(formData:FormData){
    let validate = loginSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password")
    })
    if(!validate.success){
        console.log("bad data from server probably the user hacked the client side :3");
        return
    }
    const {email , password} = validate.data
}