"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import Link from "next/link";
import { dataToServer } from "../backend/login";
import { loginSchema } from "../backend/zod";
import { useRouter } from "next/navigation";

function LoginForm() {
  const [badData, setbadData] = useState(false);
  const router = useRouter();

  async function handlSubmit(formData: FormData) {
    let validate = loginSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
    });
    if (!validate.success) {
      console.log("bad data from client");
      setbadData(true);
      return;
    }
    
    let respons = await dataToServer(formData);
    if (respons.error === "passwor or email incorrect") {
      setbadData(true);
      console.log(respons.error);
    } else if (respons.error === "all good") {
      setbadData(false);
      router.push("/home");
    }
  }

  return (
    <form
      className="flex items-center justify-center flex-col space-y-3 w-full relative "
      action={handlSubmit}
    >
      <input
        className="p-2 rounded-md text-sm w-[90%]   focus:bg-slate-200 focus:outline-myBlue"
        type="text"
        placeholder="Enter your email"
        name="email"
      />
      {badData && (
        <div className="text-red-500 self-start text-sm pl-4">
          password or email incorect
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
      {badData && (
        <div className="text-red-500 self-start text-sm pl-4">
          password or email incorect
        </div>
      )}

      <p className="text-[9px] font-bold text-right w-full pr-3">Forgot Password?</p>
      <button
        type="submit"
        className="text-myWhite text-sm font-myFont bg-myBlue w-[90%] p-2 rounded-2xl font-bold"
      >
        Login
      </button>
      <p className="text-myBlack text-[9px] font-myFont font-bold pt-3">
        Or login with
      </p>
      <button className="text-myBlack flex items-center justify-center text-sm font-myFont bg-slate-200 w-[90%] p-2 rounded-2xl font-bold">
        <Image
          src={"/google_ic.svg"}
          alt="google icon"
          width={20}
          height={20}
        ></Image>{" "}
        <span className="ml-1 text-[10px]">Log In Using Google</span>
      </button>
      <button className="text-myWhite flex items-center justify-center text-sm font-myFont bg-myBlack w-[90%] p-2 rounded-2xl font-bold">
        <Image
          src={"/cib_apple.svg"}
          alt="google icon"
          width={20}
          height={20}
        ></Image>{" "}
        <span className="ml-3 text-[10px]">Log In Using Apple</span>
      </button>
      <p className=" absolute  text-myBlack text-[12px] font-myFont font-bold   -bottom-20  ">
        Don’t have an account?{" "}
        <Link href={"/register"}>
          {" "}
          <span className="text-myBlue cursor-pointer">Register Now</span>
        </Link>
      </p>
    </form>
  );
}

export default LoginForm;
