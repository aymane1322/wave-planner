"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import Link from "next/link";
import { registerSchema } from "../backend/zod";
import { dataFromClient } from "../backend/post";
import { useRouter } from "next/navigation";

function RegisterForm() {
  const [nameEror, setNameEror] = useState(false);
  const [emailEror, setEmailEror] = useState(false);
  const [passwordEror, setPasswordEror] = useState(false);
  const [confirmPasswordEror, setConfirmPasswordEror] = useState(false);
  const [duplicated, setDuplicated] = useState(false);
  const router = useRouter();

  async function handlSubmit(formData: FormData) {
    setNameEror(false);
    setEmailEror(false);
    setPasswordEror(false);
    setConfirmPasswordEror(false);

    let validate: any = registerSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    });

    if (!validate.success) {
      console.log("error from Clinet side");

      Object.values(validate.error)
        .filter(Array.isArray)
        .forEach((errorArray) => {
          errorArray.forEach((error) => {
            if (error.path.includes("name")) {
              setNameEror(true);
            }
            if (error.path.includes("email")) {
              setEmailEror(true);
            }
            if (error.path.includes("password")) {
              setPasswordEror(true);
            }
            if (error.path.includes("confirmPassword")) {
              setConfirmPasswordEror(true);
            }
          });
        });

      return;
    }

    let respons = await dataFromClient(formData);
    if (respons.error === "Name or email already exists") {
      setDuplicated(true);
      console.log(respons.error);
    } else if (respons.error === "all good xD") {
      setDuplicated(false);
      router.push("/register/success");
    }
  }

  return (
    <form
      className="flex items-center flex-col space-y-3 w-full relative "
      action={handlSubmit}
    >
      <input
        className="p-2 rounded-md text-sm w-[90%]  focus:bg-slate-200 focus:outline-myBlue"
        type="text"
        placeholder="Username"
        name="name"
      />
      {nameEror && (
        <div className="text-red-500 self-start text-sm pl-4">invalid username </div>
      )}
      {duplicated && (
        <div className="text-red-500 self-start text-sm pl-4">
          Name or email already exists
        </div>
      )}
      <input
        className="p-2 rounded-md text-sm w-[90%]  focus:bg-slate-200 focus:outline-myBlue"
        type="email"
        placeholder="Email"
        name="email"
      />
      {emailEror && (
        <div className="text-red-500 self-start text-sm pl-4 ">invalid email</div>
      )}
      {duplicated && (
        <div className="text-red-500 self-start text-sm pl-4 ">
          Name or email already exists
        </div>
      )}
      <div className="relative w-[90%]  ">
        <input
          className="p-2 rounded-md text-sm w-full focus:bg-slate-200  focus:outline-myBlue"
          type="password"
          placeholder="Enter your password"
          name="password"
        />
        <IoEye className="absolute top-[10px] right-[15px] text-gray-400" />
      </div>
      {passwordEror && (
        <div className="text-red-500 self-start text-sm pl-4">invalid password</div>
      )}
      <div className="relative w-[90%]  ">
        <input
          className="p-2 rounded-md text-sm w-full focus:bg-slate-200  focus:outline-myBlue"
          type="password"
          placeholder="confirm your password"
          name="confirmPassword"
        />
        <IoEye className="absolute top-[10px] right-[15px] text-gray-400" />
      </div>
      {confirmPasswordEror && (
        <div className="text-red-500 self-start text-sm pl-4">
          password don&apos;t match
        </div>
      )}
      
      <button
        type="submit"
        className="text-myWhite text-sm font-myFont bg-myBlue w-[90%] p-2 rounded-2xl font-bold"
      >
        Register
      </button>
      <p className="text-myBlack text-[9px] font-myFont font-bold pt-3">
        Or Register with
      </p>
      <button
        disabled
        className="text-myBlack flex items-center justify-center text-sm font-myFont bg-slate-200 w-[90%] p-2 rounded-2xl font-bold"
      >
        <Image
          src={"/google_ic.svg"}
          alt="google icon"
          width={20}
          height={20}
        ></Image>{" "}
        <span className="ml-1 text-[10px]">Log In Using Google</span>
      </button>
      <button
        disabled
        className="text-myWhite flex items-center justify-center text-sm font-myFont bg-myBlack w-[90%] p-2 rounded-2xl font-bold"
      >
        <Image
          src={"/cib_apple.svg"}
          alt="google icon"
          width={20}
          height={20}
        ></Image>{" "}
        <span className="ml-3 text-[10px]">Log In Using Apple</span>
      </button>
      <p className=" absolute  text-myBlack text-[12px] font-myFont font-bold   -bottom-10  ">
        Already have an account?{" "}
        <Link href={"/login"}>
          {" "}
          <span className="text-myBlue cursor-pointer">Login Now</span>
        </Link>
      </p>
    </form>
  );
}

export default RegisterForm;
