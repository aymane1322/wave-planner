"use server";
import { PrismaClient } from "@prisma/client";
import { registerSchema } from "./zod";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function dataFromClient(formData?: FormData) {
  let validate = registerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!validate.success) {
    console.log("error from Server side");
    return { error: "Validation error " };
  }

  const { name, email, password } = validate.data;
  let hashedPassword = await bcrypt.hash(password, 10);
  let alldata = await prisma.utilisateur.findMany();

  if (alldata.find((e) => e.nomU === name || e.emailU === email)) {
    console.log("data duplicated so you can't go sry");

    return { error: "Name or email already exists" };
  }

  let newUser = await prisma.utilisateur.create({
    data: {
      nomU: name,
      emailU: email,
      motDePasseU: hashedPassword,
    },
  });
  console.log(newUser);
  console.log(alldata);
  console.log("data added successfuly ...");

  return { error: "all good xD" };
}

dataFromClient()
  .then(async () => await prisma.$disconnect)
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect;
  });
